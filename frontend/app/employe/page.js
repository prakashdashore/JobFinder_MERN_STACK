"use client";

import React from 'react'

const page = () => {
  return (
    <>
      <div className="mx-auto  w-[80vw] min-h-[100vh] ">
        <div className="mt-24 w-full flex items-center justify-center ">
          <div className="flex flex-col gap-10 items-center justify-center">
            <div className="text-6xl font-semibold">
              Make your dream career a reality
            </div>
            <h1 className="text-4xl">Trending on Our Platform</h1>
          </div>
        </div>

        <div className=" w-full min-h-[50vh]  my-auto flex items-center">
          <div className="w-full mt-10   flex flex-col md:flex-row lg:flex-row sm:flex-col justify-between ">
            <img
              className="object-cover w-[400px]"
              src="https://internshala.com/cached_uploads/banner-images/home_new/isis2023-student.png"
              alt=""
            />

            <img
              className="object-cover w-[400px]"
              src="https://internshala.com/cached_uploads/banner-images/home_new/international_opps-student.png"
              alt=""
            />

            <img
              className="object-cover w-[400px]"
              src="https://internshala.com/cached_uploads/banner-images/home_new/pgc_banner-student.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page
