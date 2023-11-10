"use client"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const {employe , errors , isAuthencated  } = useSelector((state) => state.employeReducer);
  const dispatch = useDispatch()



  return (
    <div className='relative w-[100vw] min-h-[100vh] mt-10 px-10 py-5 overflow-x-hidden '>

      <div className='w-full flex items-center justify-center'>
        {employe ?
        <div className='felx flex-col'>
        <div className='text-2xl font-semibold' >Hii👋 ,<strong>{employe && employe.firstname}{' '}{employe && employe.lastname}</strong></div>
        <small>Hope you are doing well !!</small>
        </div>
        

        : ''
      }
      </div>


      <div className=" relative flex flex-col md:flex-row lg:flex-row  gap-2 w-[vw] min-h-[100vh] mt-10 ">
        <div id="baar" className="w-[100%] md:w-[50%] lg:w-[50%]  bg-white overflow-y-scroll overflow-x-hidden">
          <div className="w-full flex items-center justify-center py-5 md:py-5 lg:py-5 rounded-lg text-2xl bg-blue-300">
            JOBS you created
          </div>

          <div className="p-5 w-full flex flex-col gap-5">
            {employe &&
              employe.jobs.map((j) => {
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

                 

                    
                  </div>
                );
              })}
          </div>
        </div>

        {/* ------ -internships and jobs aplyy border------------------------- */}

        <div className="w-[100%] md:w-[50%] lg::w-[50%] bg-white">
          <div className="w-full flex items-center justify-center py-5 rounded-lg text-2xl bg-blue-300">
           INTERSHIPS you created
          </div>
          <div className="p-5 w-full flex flex-col gap-5">
            {employe &&
              employe.internships.map((j) => {
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


                    
                  </div>
                );
              })}
          </div>
        </div>
      </div>




      





    </div>
  )
}



export default page