import React, {useState} from "react";
import {motion} from "framer-motion";
import {MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney} from "react-icons/md";
import useFormValidation from "../hooks/useFormValidation";
import {categories} from "../initData/initCategories";
import {Loader} from "./index";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from 'firebase/storage';
import {storage} from "../firebase.config";
import {firebaseSaveItems} from "../utils/firebaseSaveItems";

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [imageAsset, setImageAsset] = useState(null);
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {values, setValues, errors, isValid, handleChange, resetForm} = useFormValidation();

  const handleUploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadImg = uploadBytesResumable(storageRef, imageFile);

    uploadImg.on('state_changed',
      (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg('Error while uploading, please try again');
        setAlertStatus('danger');
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
    },
      () => {
        getDownloadURL(uploadImg.snapshot.ref).then(downloadURL => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg('Image uploaded successfully');
          setAlertStatus('success');
          setTimeout(() => {
            setFields(false);
            setIsLoading(false);
          }, 4000);
        })
      });
  };

  const handleDeleteUploadedImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset)
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg('Image deleted successfully');
      setAlertStatus('success');
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        id: `${Date.now()}`,
        title: values.title,
        imageURL: imageAsset,
        category: category,
        calories: values.calories,
        price: values.price,
        quantity: 1
      }
      firebaseSaveItems(data);
      setIsLoading(false);
      setFields(true);
      setMsg('Product saved successfully');
      setAlertStatus('success');
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
      resetForm();

    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg('Error while uploading, please try again');
      setAlertStatus('danger');
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-primary">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col gap-4 items-center justify-center form">
        {fields && (
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger" ? "bg-red-400 text-red-500" : "text-primary bg-emerald-500"}`}>
            {msg}
          </motion.p>
        )}

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <MdFastfood className="text-xl text-gray-700"/>
          <input
            value={values.title || ''}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Enter title please"
            required
            className="w-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400 placeholder:font-medium"
          />
        </div>

        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full border-b-2 border-gray-200 p-2 rounded-md bg-primary"
          >
            <option
              value="other"
              className="text-gray-400 bg-primary"
            >
              Select Category
            </option>
            {categories.map(elem => (
              <option
                key={elem.id}
                value={elem.urlParamName}
                className="text-base border-0 outline-none capitalize text-headingColor"
              >
                {elem.name}
              </option>
            ))}
          </select>
        </div>

        <div
          className="group flex flex-col justify-center items-center border-2 border-dotted border-gray-300 w-full h-[250px] md:h-[500px] rounded-lg">
          {isLoading ? <Loader/> : <>
            {!imageAsset
              ? (
                <>
                  <label className="w-full h-full flex flex-col gap-2 items-center justify-center cursor-pointer">
                    <MdCloudUpload className="text-gray-500 text-3xl"/>
                    <p className="text-gray-400">Upload image</p>
                    <input
                      onChange={handleUploadImage}
                      name="uploadimage"
                      type="file"
                      accept="image/*"
                      className='w-0 h-0'
                    />
                  </label>
                </>)
              : (
                <>
                  <div className='relative h-full'>
                    <img src={imageAsset} alt='uploaded image' className='w-full h-full object-cover'/>
                    <button
                      onClick={handleDeleteUploadedImage}
                      type='button'
                      className='absolute bottom-3 right-3 rounded-full bg-orange-500 text-xl outline-none cursor-pointer hover:bg-orange-200 transition-all'
                    >
                      <MdDelete className='text-white hover:text-orange-500'/>
                    </button>
                  </div>
                </>
              )
            }
          </>}
        </div>

        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFoodBank className='text-gray-700 text-2xl'/>
          <input
            value={values.calories || ''}
            onChange={handleChange}
            name="calories"
            type="text"
            placeholder="Enter calories"
            required
            className="w-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400 placeholder:font-medium"
          />
        </div>

        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdAttachMoney className='text-gray-700 text-2xl'/>
          <input
            value={values.price || ''}
            onChange={handleChange}
            name="price"
            type="text"
            placeholder="Enter price"
            required
            className="w-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400 placeholder:font-medium"
          />
        </div>

        <button
          type='submit'
          className='bg-orange-500 w-full md:w-40 px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all'
        >
          Save Product
        </button>
      </form>
    </section>
  );
};

export default CreateContainer;