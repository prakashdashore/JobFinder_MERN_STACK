"use client";

import { asyncCurrentStudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NevTwo from "@/components/nevbaars/student/Nev-2";
import NevThree from "@/components/nevbaars/student/Nev-3";
import { toast } from "react-toastify";
import { removeError } from "@/store/Reducers/studentReducer";

const layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {student , errors , isAuthencated  } = useSelector((state) => state.studentReducer);

  // console.log(isAuthencated);

  useEffect(() => {
    dispatch(asyncCurrentStudent());
    if (isAuthencated) router.push("/student/auth");
    if (!isAuthencated) router.push("/student/");
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
