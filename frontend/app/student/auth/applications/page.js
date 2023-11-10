"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { student, errors, isAuthencated, jobs, internships } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="relative w-[100vw] min-h-[90vh] mt-10 px-10 py-5 overflow-hidden ">
      <div className=" relative flex  gap-2 w-[vw] min-h-[90vh] mt-10 ">
        <div id="baar" className="w-[50%] bg-white overflow-y-scroll">
          <div className="w-full flex items-center justify-center py-5 rounded-lg text-2xl bg-blue-300">
           JOBS you applied 
          </div>

          <div className=" mx-auto relative flex  gap-2 w-full h-full">
            <div className="w-full ">
              <div className="mt-5 px-5  flex  flex-col gap-5  w-full text-black ">
                {student &&
                  student.jobs.map((j) => {
                    return (
                      <div
                        key={j._id}
                        className="
                "
                      >
                        <div className="flex justify-center w-full gap-10 hover:bg-blue-100 rounded-lg  ">
                          <div className="flex flex-col py-5">
                            <div>Profile</div>
                            <div>{j.title}</div>
                          </div>
                          <div className="flex flex-col py-5">
                            <div>Appicants</div>
                            <div>{student.jobs.length}</div>
                          </div>
                          <div className="flex flex-col py-5">
                            <div>Status</div>
                            <div>applied !</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>



        <div id="baar" className="w-[50%] bg-white overflow-y-scroll">
          <div className="w-full flex items-center justify-center py-5 rounded-lg text-2xl bg-blue-300">
            INTERSHIPS you applied 
          </div>

          <div className=" mx-auto relative flex  gap-2 w-full h-full">
            <div className="w-full ">
              <div className="mt-5 px-5  flex  flex-col gap-5  w-full text-black ">
                {student &&
                  student.internships.map((j) => {
                    return (
                      <div
                        key={j._id}
                        className="
                "
                      >
                        <div className="flex justify-center w-full gap-10 hover:bg-blue-100 rounded-lg  ">
                          <div className="flex flex-col py-5">
                            <div>Profile</div>
                            <div>{j.title}</div>
                          </div>
                          <div className="flex flex-col py-5">
                            <div>Appicants</div>
                            <div>{student.internships.length}</div>
                          </div>
                          <div className="flex flex-col py-5">
                            <div>Status</div>
                            <div>applied !</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>





      </div>
    </div>
  );
};

export default page;
