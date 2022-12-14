import React, {useEffect} from "react";
import {Header, MainContainer, CreateContainer} from "./components";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {firebaseFetchProducts} from "./utils/firebaseFetchProducts";
import {setProducts} from "./store/productsSlice";

function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    await firebaseFetchProducts().then(res => dispatch(setProducts(res)));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
      <AnimatePresence mode='wait'>
          <div className={`h-screen flex flex-col ${cart.isShowCart ? 'overflow-hidden' : ''}`}>
              <Header/>

              <main className='bg-primary p-3 md:p-6 flex flex-col gap-4 md:gap-8'>
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
