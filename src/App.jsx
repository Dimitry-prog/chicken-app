import React, {useEffect} from "react";
import {Header, MainContainer, CreateContainer} from "./components";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {useDispatch} from "react-redux";
import {firebaseFetchProducts} from "./utils/firebaseFetchProducts";
import {setProducts} from "./store/productsSlice";

function App() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    await firebaseFetchProducts().then(res => dispatch(setProducts(res)));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
      <AnimatePresence mode='wait'>
          <div className="w-screen h-screen flex flex-col">
              <Header/>

              <main className=''>
                  <Routes>
                      <Route path='/' element={<MainContainer/>}/>
                      <Route path='/create-item' element={<CreateContainer/>}/>
                  </Routes>
              </main>
          </div>
      </AnimatePresence>
  );
}

export default App;
