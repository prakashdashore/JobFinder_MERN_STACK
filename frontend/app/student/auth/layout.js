"use client";
import { asyncCurrentStudent, asyncFindallInternships, asyncFindallJobs } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter()

  const {student , errors , isAuthencated , jobs , internships  } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthencated) {

        dispatch(asyncFindallJobs())
        dispatch(asyncFindallInternships())
    } 
    if (!isAuthencated) router.push("/student/");
  }, [isAuthencated]);

  return (
    <>
      {children}
    </>
  );
};

export default layout;
