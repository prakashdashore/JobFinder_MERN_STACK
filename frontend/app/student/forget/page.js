"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { asyncStudentSendmail } from "@/store/Actions/studentActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const {errors} =   useSelector((state) => state.studentReducer);

  const formHandyy = (email) => {
    dispatch(asyncStudentSendmail(email));
    toast.success("Check your email");
    if(errors.length === 0){
        router.push("/student/forget/otp");

    }else{
        errors.forEach(err=>toast.error(err))
    }

    console.log(email);
  };

  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <form
                onSubmit={handleSubmit(formHandyy)}
                className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8"
              >
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

                <button
                  type="submit "
                  className="bg-blue-400 w-full py-2 rounded-lg text-white "
                >
                  Send mail
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
