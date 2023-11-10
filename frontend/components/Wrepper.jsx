"use client";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "@/store/Store";
import { Provider, useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
const Wrapper = ({ children }) => {
 





  return (
    <>
      <NextUIProvider>
        <Provider store={store}>{children}</Provider>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </NextUIProvider>
    </>
  );
};

export default Wrapper;
