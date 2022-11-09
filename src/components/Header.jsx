import React, {useState} from "react";
import logo from '../images/logo.png';
import userAvatar from '../images/avatar.png';
import {initMenuLinks} from "../initData/initMenuLinks";
import {Link, NavLink} from "react-router-dom";
import {IoCart, IoAdd, IoLogOutOutline} from "react-icons/io5";
import { motion } from 'framer-motion';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config';
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../store/userSlice";

const Header = () => {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [isMenu, setIsMenu] = useState(false);

    const handleLogin = async () => {
        if (!user) {
          const firebaseAuth = getAuth(app);
          const provider = new GoogleAuthProvider();
          const response = await signInWithPopup(firebaseAuth, provider);
          const {providerData, refreshToken} = response.user
          dispatch(setUser(providerData[0]));
          localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
          setIsMenu(!isMenu);
        }
    }

    const handleLogout = () => {
      setIsMenu(false);
      localStorage.removeItem('user');
      dispatch(setUser(null));
    }

    return (
        <header className='fixed z-50 w-screen bg-slate-300 p-3 md:p-6'>

            <nav className='hidden md:flex w-full h-full items-center gap-5'>

                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt={'logo'} className='w-8 object-cover'/>
                    <p className='text-headingColor text-xl font-bold'>Chicken</p>
                </Link>

                <ul className='list-none flex items-center gap-8 ml-auto'>
                    {initMenuLinks.map(link => (
                        <li key={link.id} className='text-base text-textColor hover:text-headingColor transition-all'>
                            <NavLink to={link.link}>{link.name}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className='relative flex items-center justify-center'>
                    <IoCart className='w-6 h-6 text-textColor hover:text-headingColor transition-all cursor-pointer'/>
                    <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
                        <p className='text-xs text-white font-medium'>2</p>
                    </div>
                </div>

              <div onClick={handleLogin} className="cursor-pointer shadow-2xl">
                <motion.img whileTap={{scale: 0.6}} src={user ? user.photoURL : userAvatar} alt="user-avatar"
                            className="w-10 object-cover rounded-full"/>
                {isMenu && (
                  <motion.ul
                    initial={{opacity: 0, scale: 0.6}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.6}}
                    className="list-none bg-primary shadow-xl rounded-md flex flex-col gap-1 absolute right-1"
                  >

                  {user.email === "kfifa3@gmail.com" && (
                    <li className="text-textColor hover:bg-stone-200 hover:text-headingColor transition-all py-2 px-4">
                      <Link to="/create-item" className="flex items-center gap-2">Create Item <IoAdd/> </Link>
                    </li>
                  )}

                    <button
                      onClick={handleLogout}
                      className="flex justify-center items-center rounded text-textColor bg-gray-300 hover:bg-stone-200 hover:text-headingColor transition-all m-2 p-2">
                      <Link to="/create-item" className="flex items-center gap-2">Logout <IoLogOutOutline/> </Link>
                    </button>
                </motion.ul>
                )}
              </div>

            </nav>

            <nav className='flex md:hidden w-full h-full justify-between'>
              <div className='relative flex items-center justify-center'>
                <IoCart className='w-6 h-6 text-textColor hover:text-headingColor transition-all cursor-pointer'/>
                <div className='absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center'>
                  <p className='text-xs text-white font-medium'>2</p>
                </div>
              </div>

              <Link to={'/'} className='flex items-center gap-2'>
                <img src={logo} alt={'logo'} className='w-6 object-cover'/>
                <p className='text-headingColor text-md font-bold'>Chicken</p>
              </Link>

              <div onClick={handleLogin} className="cursor-pointer shadow-2xl">
                <motion.img whileTap={{scale: 0.6}} src={user ? user.photoURL : userAvatar} alt="user-avatar"
                            className="w-8 object-cover rounded-full"/>
                {isMenu && (
                  <motion.ul
                    initial={{opacity: 0, scale: 0.6}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.6}}
                    className="list-none bg-primary shadow-xl rounded-md flex flex-col gap-1 absolute right-1 top-12"
                  >

                    {user.email === "kfifa3@gmail.com" && (
                      <li className="text-textColor hover:bg-stone-200 hover:text-headingColor transition-all py-2 px-4">
                        <Link to="/create-item" className="flex items-center gap-2">Create Item <IoAdd/> </Link>
                      </li>
                    )}
                    <ul className='list-none flex flex-col gap-1'>
                      {initMenuLinks.map(link => (
                        <li key={link.id} className='text-textColor hover:bg-stone-200 hover:text-headingColor transition-all py-2 px-4'>
                          <Link to={link.link}  className="flex items-center gap-2">{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={handleLogout}
                      className="flex justify-center items-center rounded text-textColor bg-gray-300 hover:bg-stone-200 hover:text-headingColor transition-all m-2 p-2">
                      <Link to="/" className="flex items-center gap-2">Logout <IoLogOutOutline/> </Link>
                    </button>
                  </motion.ul>
                )}
              </div>
            </nav>
        </header>
    );
};

export default Header;