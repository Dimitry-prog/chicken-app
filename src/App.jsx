import React from 'react';
import {Header, MainContainer, CreateContainer} from "./components";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
      <AnimatePresence mode='wait'>
          <div className="w-screen h-screen flex flex-col">
              <Header/>

              <main className='mt-24 w-full p-8'>
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
