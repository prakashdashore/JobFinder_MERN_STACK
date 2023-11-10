"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NevTwo from "@/components/nevbaars/employe/Nev-2";
import NevThree from "@/components/nevbaars/employe/Nev-3";
import { toast } from "react-toastify";
import { removeError } from "@/store/Reducers/employeReducer";
import { asyncCurrentEmploye } from "@/store/Actions/employeActions";

const layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {employe , errors, isAuthencated} =  useSelector((state) => state.employeReducer);

  console.log(isAuthencated);

  useEffect(() => {
    dispatch(asyncCurrentEmploye());
    if (isAuthencated) router.push("/employe/auth");
    if (!isAuthencated) router.push("/employe/");
  }, [isAuthencated]);


  if(errors.length > 0){
    errors.forEach(err=>toast.error(err))
    dispatch(removeError())
  }




  return (
    <>

      {!isAuthencated ? <NevTwo /> : <NevThree />}

      {/* <nav   className='flex mt-10 ml-10 gap-5' >

      <Link href='/student/login'>Login</Link>
      <Link href='/student/register'>Register</Link>
      <Link href='/student/'>Home</Link>
    


    </nav> */}

      {children}
    </>
  );
};

export default layout;
