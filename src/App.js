import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import PageLoader from './components/PageLoader';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <PageLoader/>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<AddUser/>} />         
        </Routes>
        <ToastContainer
                position="top-right"
                closeButton={false}
                transition={Slide}
                autoClose= {6000}
                progressClassName="progressHeight"
                className="toastWidth"
                borderRadius= "15px"
            />
    </BrowserRouter>
    </Provider>

  );
}

export default App;
