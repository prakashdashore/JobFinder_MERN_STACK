"use client";



import {
  asyncApplyIntStudent,
  asyncApplyJobsStudent,
  asyncFindallInternships,
  asyncFindallJobs,
} from "@/store/Actions/studentActions";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const { student, errors, isAuthencated, jobs, internships } = useSelector(
    (state) => state.studentReducer
  );


  const dispatch = useDispatch();

  const applyJobHandyy = (id) => {
    // console.log(id)
    if (student?.application.includes(id)) {
      toast.error("Alredy applied");
      return;
    } else {
      dispatch(asyncApplyJobsStudent(id));
      toast.success("Applied JOB successfully");
    }
  };

  const applyIntHandyy = (id) => {
    if (student && student?.application.includes(id)) {
      toast.error("Alredy applied");
      return;
    } else {
      dispatch(asyncApplyIntStudent(id));
      toast.success("Applied INTERNSHIP successfully");
    }
  };

  useEffect(() => {
    dispatch(asyncFindallJobs());
    dispatch(asyncFindallInternships());
  }, [student]);

  return (
    <div className="relative w-[100vw] min-h-[100vh] mt-10 px-0 md:px-10 lg:px-10 first-letter: py-5 overflow-x-hidden ">
      <div className="w-full flex items-center justify-center">
        {student && student ? (
          <div className="felx flex-col">
            <div className="text-2xl font-semibold">
              Hii👋 ,<strong>{student && student.firstname}</strong>
            </div>
            <small>Hope you are doing well !!</small>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className=" relative flex flex-col md:flex-row lg:flex-row  gap-2 w-[vw] min-h-[100vh] mt-10 ">
        <div id="baar" className="w-[100%] md:w-[50%] lg:w-[50%]  bg-white overflow-y-scroll overflow-x-hidden">
          <div className="w-full flex items-center justify-center py-5 md:py-5 lg:py-5 rounded-lg text-2xl bg-blue-300">
            Hare's are some JOBS for you
          </div>

          <div className="p-5 w-full flex flex-col gap-5">
            {jobs &&
              jobs.map((j) => {
                return (
                  <div
                    key={j._id}
                    className="
                   w-full bg-slate-300 p-3"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-2xl font-semibold "> {j.title}</div>
                      <div></div>
                    </div>
                    {/* <div>Commm</div> */}
                    <div>Location : {j.joblocation}</div>

                    <div className="flex flex-wrap items-center justify-between w-full">
                      <div>Openings : {j.openings}</div>
                      <div>Job type : {j.jobtype}</div>
                      {/* <div>EX.</div> */}
                    </div>
                    <div className="flex flex-wrap items-center justify-between w-full">
                      <div>Skills : {j.openings}</div>
                      <div>Job type : {j.jobtype}</div>
                      {/* <div>EX.</div> */}
                    </div>
                    <div className="whitespace-pre">perks : {j.perks}</div>
                    <div className="whitespace-pre">Prefrencess : {j.prefrences}</div>
                    <div className="whitespace-pre">Descreption : {j.description}</div>

                    <div className="w-full border-b-1 border-blue-500 mt-10"></div>

                    <div
                      className="flex items-end
                    justify-end"
                    >
                      {student?.application.includes(j._id) ? (
                        <button
                          onClick={() => applyJobHandyy(j._id)}
                          className="bg-blue-400 text-white px-5 py-2"
                        >
                          {" "}
                          Alredy applied
                        </button>
                      ) : (
                        <button
                          onClick={() => applyJobHandyy(j._id)}
                          className="bg-blue-400 text-white px-5 py-2"
                        >
                          Apply now
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* ------ -internships and jobs aplyy border------------------------- */}

        <div className="w-[100%] md:w-[50%] lg::w-[50%] bg-white">
          <div className="w-full flex items-center justify-center py-5 rounded-lg text-2xl bg-blue-300">
            Hare's are some INTERSHIPS for you
          </div>
          <div className="p-5 w-full flex flex-col gap-5">
            {internships &&
              internships.map((j) => {
                return (
                  <div
                    key={j._id}
                    className="
                   w-full bg-slate-300 p-3"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-2xl font-semibold "> {j.title}</div>
                      <div>LoGo</div>
                    </div>
                    <div>Commm</div>
                    <div>Skills : {j.skills}</div>

                    <div className="flex items-center justify-between w-full">
                      <div>Openings : {j.openings}</div>
                    </div>
                    <div className="flex gap-3 w-full  flex-wrap">
                      <div>From : {j.from}</div>
                      <div>To : {j.to}</div>
                    </div>
                    <div>duration : {j.duration}</div>

                    <div className="w-full  flex flex-wrap">Perks :{j.perks}</div>
                    <div className="whitespace-pre">
                      Role & Responsibilities : {j.responsibilities}
                    </div>


                    <div className="w-full border-b-1 border-blue-500 mt-10"></div>

                    <div
                      className="flex items-end
                    justify-end"
                    >
                      {student?.application.includes(j._id) ? (
                        <button
                          onClick={() => applyIntHandyy(j._id)}
                          className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2"
                        >
                          {" "}
                          Alredy applied
                        </button>
                      ) : (
                        <button
                          onClick={() => applyIntHandyy(j._id)}
                          className="bg-blue-400 text-white px-5 py-2"
                        >
                          Apply now
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
