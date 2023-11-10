"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileModel from "@/components/models/employe/profileModel";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { asyncUpdateEmploye } from "@/store/Actions/employeActions";

const page = () => {
  const { employe } = useSelector((state) => state.employeReducer);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const formHanddy = (upEmploye) => {
    console.log(upEmploye);
    console.log("form chlaa");
    dispatch(asyncUpdateEmploye(upEmploye));
    toast.success("Details Updated Successfully !!");
  };



  return (
    <>
      <div className="relative w-[90vw] md:w-[55vw] lg:[60vw] mx-auto pb-20 ">
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>
            <p className="text-sm leading-5 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <div className="flex gap-5 flex-col md:flex-row w-full h-auto lg:flex-row ">
                  <div
              
                    className="p-2 w-[200px] h-[200px]  overflow-hidden hover:cursor-pointer  "
                  >
                    <img
                      className="object-cover w-full h-full rounded-lg border-white border-1"
                      src={employe?.organistionlogo.url}
                      alt="Avtar"
                    />
                  </div>
                  <div className="border-r-2 border-gray-500"></div>
                  <div className="p-3">
                    <h1 className="text-2xl font-semibold">
                      {employe?.organistionname}
                    </h1>
                    <p className="text-sm text-gray-700">{employe?.email}</p>
                    <div>
                      <p className="text-xs text-gray-500">
                        {employe?.organistiondescription}
                      </p>
                    </div>
                    <div>
                      <ProfileModel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            kjsdfkldfksjdkfjsdkjfkjksdjfkdjflkd
          </div> */}

          <form
            onSubmit={handleSubmit(formHanddy)}
            className="border-b border-gray-700/10 pb-12"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Organistion Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="organistionname"
                  {...register("organistionname")}
                  placeholder="Change Organistion Name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Change First Name"
                    {...register("firstname")}
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Change Last Name"
                    {...register("lastname")}
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="organistiondescription"
                    {...register("organistiondescription")}
                    rows={3}
                    className="block w-full rounded-md border-0 p-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <button
              className="py-2 px-5 mt-5 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-lg"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
