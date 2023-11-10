"use client";
import { Spinner } from "@nextui-org/react";
import React from "react";
import { InfinitySpin , TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-t bg-slate-100">
        {/* <Spinner size="lg" /> */}
        <div className="absolute ">
          {/* <InfinitySpin width={200} color="#4fa94d" /> */}
          <TailSpin
            height="100"
            width="100"
            color="#93C5FD"
            ariaLabel="tail-spin-loading"
            radius="4"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
