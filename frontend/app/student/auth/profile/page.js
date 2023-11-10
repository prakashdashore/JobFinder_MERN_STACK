"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileModel from "@/components/models/student/profileModel";
import { useForm } from "react-hook-form";
import { asyncUpdateStudent } from "@/store/Actions/studentActions";
import { toast } from "react-toastify";

const page = () => {

  const {student ,errors,isAuthencated } = useSelector((state) => state.studentReducer);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const formHanddy = (upStudent) => {
    console.log(upStudent)
    // console.log("form chlaa")
    dispatch(asyncUpdateStudent(upStudent))
    toast.success("Details Updated Successfully !!")

  }


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
                  <div className="p-2 w-[200px] h-[200px]  overflow-hidden  ">
                    <img
                      className="object-cover w-full h-full rounded-lg border-white border-1"
                      src={student?.profile.url}
                      alt="Avtar"
                    />
                   
                  </div>
                  <div className="border-r-2 border-gray-500"></div>
                  <div className="p-3">
                    <h1 className="text-2xl font-semibold">
                      {student?.firstname} {student?.lastname}
                    </h1>
                    <p className="text-sm text-gray-500">{student?.email}</p>
                    <div>
                      <p className="text-sm text-gray-500">
                        {student?.about}
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


          <form   onSubmit={handleSubmit(formHanddy)}  className="border-b border-gray-700/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>


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
                    {...register("lastname")}
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5  px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  {...register("about")}
               
                  rows={3}
                  className="block w-full rounded-md border-0 p-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

              <div className="sm:col-span-3">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
              Address Information
            </h2>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    {...register("country")}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Bharat</option>
                    <option>United States</option>
                    <option>Caneda</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street"
                    {...register("street")}
          
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    {...register("city")}
                  
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="state"
                    {...register("state")}
                   

                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="pincode"
                    {...register("pincode")}
                   
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          <button className="py-2 px-5 mt-5 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-lg" type="submit">Update</button>

          </form>


        
        </div>
      </div>
    </>
  );
};

export default page;
