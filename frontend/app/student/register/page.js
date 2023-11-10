"use client";

import { asyncRegisterStudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const formHandyy = (student) => {
    dispatch(asyncRegisterStudent(student));
    router.push("/student/login");
  };

  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <div className="w-full flex flex-col md:flex-row lg:flex-row"></div>
              <p className="w-full text-4xl font-medium text-center font-serif">
                Register
              </p>

              <form
                onSubmit={handleSubmit(formHandyy)}
                className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8"
              >
                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Fist Name
                  </p>
                  <input
                    placeholder="Enter firstName"
                    name="firstname"
                    type="text"
                    {...register("firstname")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Last Name
                  </p>
                  <input
                    placeholder="Enter lastname"
                    name="lastname"
                    type="text"
                    {...register("lastname")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Email
                  </p>
                  <input
                    placeholder="Enter email"
                    name="email"
                    type="email"
                    {...register("email")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Password
                  </p>
                  <input
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    {...register("password")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Contect
                  </p>
                  <input
                    placeholder="Enter contect"
                    name="contect"
                    type="number"
                    {...register("contect")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className=" relative ">
                  <p className=" bg-white absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 ">
                    Gender
                  </p>
                  <select
                    {...register("gender")}
                    name="gender"
                    className="border placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300 py-2 px-4 text-gray-700 leading-tight transition duration-200 ease-in-out w-full pt-4 pr-4 pb-4 pl-4 mr-0 mb-0 ml-0 font-medium text-base bg-white block rounded-xl"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit "
                  className="bg-blue-400 w-full py-2 rounded-lg text-white "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
