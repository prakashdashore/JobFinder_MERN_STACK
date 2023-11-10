"use client";

import { createIntershipp, createJob } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const formHandyy = (jobData) => {
    // console.log(jobData)
    dispatch(createIntershipp(jobData));
    router.push("/employe/auth/jobs-internships-cerated");
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
                    Title
                  </p>
                  <input
                    placeholder="Enter title"
                    name="title"
                    type="text"
                    {...register("title")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Skills
                  </p>
                  <input
                    placeholder="Enter skills"
                    name="skills"
                    type="text"
                    {...register("skills")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    Location
                  </p>
                  <input
                    placeholder="Enter location"
                    name="location"
                    type="location"
                    {...register("location")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                    openings
                  </p>
                  <input
                    placeholder="openings"
                    name="openings"
                    type="number"
                    {...register("openings")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  From
                  </p>
                  <input
                    placeholder="Enter from"
                    name="from"
                    type="text"
                    {...register("from")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div><div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  TO
                  </p>
                  <input
                    placeholder="Enter to"
                    name="to"
                    type="text"
                    {...register("to")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div><div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Duration
                  </p>
                  <input
                    placeholder="Enter duration"
                    name="duration"
                    type="text"
                    {...register("duration")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Assesment
                  
                  </p>
                  <input
                    placeholder="Enter assessments"
                    name="assessments"
                    type="text"
                    {...register("assessments")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>





                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  perks
                  
                  </p>
                  <input
                    placeholder="Enter perks"
                    name="perks"
                    type="text"
                    {...register("perks")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>

                <div className="relative">
                  <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                  Stipend
                  </p>
                  <input
                    placeholder="Enter stipend"
                    name="stipend"
                    type="text"
                    {...register("stipend")}
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                  />
                </div>
                <div className=" relative ">
                  <p className=" bg-white absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 ">
                    Stipend type
                  </p>
                  <select
                    {...register("stipendtype")}
                    name="stipendtype"
                    className="border placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300 py-2 px-4 text-gray-700 leading-tight transition duration-200 ease-in-out w-full pt-4 pr-4 pb-4 pl-4 mr-0 mb-0 ml-0 font-medium text-base bg-white block rounded-xl"
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Fixed">Fixed</option>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Performance based">Performance based</option>

                  </select>
                </div>

                <div className=" relative ">
                  <p className=" bg-white absolute pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 ">
                    InternShip type
                  </p>
                  <select
                    {...register("jobtype")}
                    name="jobtype"
                    className="border placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-0 border-gray-300 py-2 px-4 text-gray-700 leading-tight transition duration-200 ease-in-out w-full pt-4 pr-4 pb-4 pl-4 mr-0 mb-0 ml-0 font-medium text-base bg-white block rounded-xl"
                  >
                    <option value="In office">In office</option>
                    <option value="Remote">Remote</option>

                  </select>
                </div>


                <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  responsibilities
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="responsibilities"
                    {...register("responsibilities")}
                    rows={3}
                    className="block w-full rounded-md border-0 p-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
                <button
                  type="submit "
                  className="bg-blue-400 w-full py-2 rounded-lg text-white "
                >
                  Create 
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
