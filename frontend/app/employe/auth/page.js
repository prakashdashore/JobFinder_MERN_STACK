"use client"

import Link from 'next/link';
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
        <div className='text-2xl font-semibold' >Hii👋 ,<strong>{employe && employe.firstname}</strong></div>
        <small>Hope you are doing well !!</small>
        

        </div>
        

        : ''
      }
      </div>

      <div className=" relative flex flex-col md:flex-row lg:flex-row  gap-2 w-[vw] min-h-[100vh] mt-10 ">
        <div id="baar" className="w-[100%] md:w-[50%] lg:w-[50%]  bg-white overflow-y-scroll overflow-x-hidden">
        <Link href='/employe/auth/create/jobs' >
          <div className="w-full flex items-center justify-center py-5 rounded-lg text-2xl bg-blue-300">
            create JOBS 
          </div>
          </Link>

         
        </div>

        {/* ------ -internships and jobs aplyy border------------------------- */}

        <div className="w-[100%] md:w-[50%] lg::w-[50%] bg-white">
          <Link href='/employe/auth/create/internships' >
          <div className="w-full flex items-center justify-center py-5 rounded-lg text-2xl bg-blue-300">
            create INTERSHIPS 
          </div>
          </Link>
        
        </div>
      </div>

     




      





    </div>
  )
}



export default page