"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import AddEduModel from "@/components/models/student/educationModels/addEduModel";
import EditEduModel from "@/components/models/student/educationModels/editEduModel";
import AddJobs from "@/components/models/student/jobsModel/addJobs";
import EditJobs from "@/components/models/student/jobsModel/editJobs";
import {
  asynDeleteEducation,
  asynDeleteInternShips,
  asynDeleteJobs,
  asynDeletePositionOfResp,
  asynDeleteProjects,
  asynDeleteSkills,
} from "@/store/Actions/studentActions";
import AddInt from "@/components/models/student/intModels/addInt";
import AddSkills from "@/components/models/student/slillsModels/addSkill";
import EditSkills from "@/components/models/student/slillsModels/editSkill";
import AddPositionOfResp from "@/components/models/student/responsiblityModel/responsebity";
import EditPositionOfResp from "@/components/models/student/responsiblityModel/editres";
import AddProjects from "@/components/models/student/projectsModel/addPros";
import EditProjects from "@/components/models/student/projectsModel/editPros";
import { toast } from "react-toastify";

const page = () => {
  const { student, errors, isAuthenticated } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  const deleteEduHandyy = (id) => {
    dispatch(asynDeleteEducation(id));
    toast.success("Education deleted successfully");
  };
  const deleteJobHandyy = (id) => {
    dispatch(asynDeleteJobs(id));
    toast.success("Job deleted successfully");
  };
  const deleteIntHandyy = (id) => {
    dispatch(asynDeleteInternShips(id));
    toast.success("Internship deleted successfully");
  };

  const deletePosHandyy = (id) => {
    dispatch(asynDeleteSkills(id));
    toast.success("Position of responsiblity deleted successfully");
  };
  const deleteSkillsHandyy = (id) => {
    dispatch(asynDeleteSkills(id));
    toast.success("Skills deleted successfully");
  };
  const deleteProjeectsHandyy = (id) => {
    dispatch(asynDeleteProjects(id))
    toast.success("Project deleted successfully");
  }

  useEffect(() => {}, [student]);

  return (
    <div>
      <div className=" min-h-[100vh] w-[100vw] md:w-[80vw] lg:w-[80vw]  mx-auto pb-20">
        <button className="text-blue-400 "> {"<-"} Back</button>

        <div className="bg-white min-h-[100vh] w-[100vw] md:w-[60vw] lg:w-[60vw]  mx-auto mt-16">
          <div className="w-full flex items-center justify-center">
            <h1 className="text-4xl ">Resume</h1>
          </div>

          <div className="w-full min-h-[100vh] mt-16  rounded-lg border-2 border-gray-300 border  px-10 py-10 flex flex-col ">
            <div className="border-b border-gray-300 py-5">
              <h1 className="text-3xl font-bold">{student && student.firstname}{' '}{  student && student.lastname}</h1>
              <h1 className=" text-gray-400 ">{student && student.email}</h1>
              <h1 className=" text-gray-400 ">{student && student.contect}</h1>
              <h1 className=" text-gray-400 ">{student && student?.city}</h1>
            </div>

            {student && student.resume ? (
              <div
                id="education"
                className="my-5 border-b border-gray-300 py-5 w-full min-h-[20vh]  flex flex-col md:flex-row lg:flex-row "
              >
                <div className="w-[30%] min-h-[100%]">
                  <div className="text-xl font-semibold">Education</div>
                </div>
                <div className="w-[70%] min-h-[100%] ">
                  {student.resume.education.map((edu) => {
                    return (
                      <div
                        key={edu.id}
                        className=" mb-5 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xl font-semibold">
                            {edu.degree}
                          </div>
                          <div className="text-gray-400">{edu.college}</div>
                          <div className="text-gray-400">
                            Year of completion: {edu.year}
                          </div>
                          <div className="text-gray-400">
                            CGPA: {edu.percentage}
                          </div>
                        </div>

                        <div className=" text-2xl  flex  items-center ">
                          <div className="text-gray-400 hover:text-gray-500">
                            <EditEduModel id={edu.id} />
                          </div>

                          <div
                            onClick={() => deleteEduHandyy(edu.id)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="w-full h-auto bg-blue-300 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                    <AiOutlinePlus /> <AddEduModel />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {student && student.resume ? (
              <div
                id="education"
                className="my-5 border-b border-gray-300 py-5 w-full min-h-[20vh]  flex flex-col md:flex-row lg:flex-row "
              >
                <div className="w-[30%] min-h-[100%]">
                  <div className="text-xl font-semibold">Jobs</div>
                </div>
                <div className="w-[70%] min-h-[100%] ">
                  {student.resume.jobs.map((job) => {
                    return (
                      <div
                        key={job.id}
                        className=" mb-5 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xl font-semibold">
                            {job.title}
                          </div>
                          <div className="text-gray-400">
                            {job.organisation}
                          </div>
                          <div className="text-gray-400">
                            {job.from}
                            {"-"}
                            {job.to}
                          </div>
                          <div className="text-gray-400">{job.desc}</div>
                        </div>

                        <div className=" text-2xl  flex  items-center ">
                          <div className="text-gray-400 hover:text-gray-500">
                            <EditJobs id={job.id} />
                          </div>
                          <div
                            onClick={() => deleteJobHandyy(job.id)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="w-full h-auto bg-blue-300 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                    <AiOutlinePlus /> <AddJobs />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {student && student.resume ? (
              <div
                id="education"
                className="my-5 border-b border-gray-300 py-5 w-full min-h-[20vh]  flex flex-col md:flex-row lg:flex-row "
              >
                <div className="w-[30%] min-h-[100%]">
                  <div className="text-xl font-semibold">Internships</div>
                </div>
                <div className="w-[70%] min-h-[100%] ">
                  {student.resume.internships.map((int) => {
                    return (
                      <div
                        key={int.id}
                        className=" mb-5 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xl font-semibold">
                            {int.title}
                          </div>
                          <div className="text-gray-400">
                            {int.organisation}
                          </div>
                          <div className="text-gray-400">
                            {int.from}
                            {"-"}
                            {int.to}
                          </div>
                          <div className="text-gray-400">{int.desc}</div>
                        </div>

                        <div className=" text-2xl  flex  items-center ">
                          <div className="text-gray-400 hover:text-gray-500">
                            <EditJobs id={int.id} />
                          </div>
                          <div
                            onClick={() => deleteIntHandyy(int.id)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="w-full h-auto bg-blue-300 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                    <AiOutlinePlus /> <AddInt />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {student && student.resume.positionofresponsiblity ? (
              <div
                id="education"
                className="my-5 border-b border-gray-300 py-5 w-full min-h-[20vh]  flex flex-col md:flex-row lg:flex-row "
              >
                <div className="w-[30%] min-h-[100%]">
                  <div className="text-xl  font-semibold">Responsiblities</div>
                </div>
                <div className="w-[70%] min-h-[100%] ">
                  {student.resume.positionofresponsiblity.map((int) => {
                    return (
                      <div
                        key={int.id}
                        className=" mb-5 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-gray-400">{int.desc}</div>
                        </div>

                        <div className=" text-2xl  flex  items-center ">
                          <div className="text-gray-400 hover:text-gray-500">
                            <EditPositionOfResp id={int.id} />
                          </div>
                          <div
                            onClick={() => deletePosHandyy(int.id)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="w-full h-auto bg-blue-300 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                    <AiOutlinePlus /> <AddPositionOfResp />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {student && student.resume.skills ? (
              <div
                id="education"
                className="my-5 border-b border-gray-300 py-5 w-full min-h-[20vh]  flex flex-col md:flex-row lg:flex-row "
              >
                <div className="w-[30%] min-h-[100%]">
                  <div className="text-xl font-semibold">Skills</div>
                </div>
                <div className="w-[70%] min-h-[100%] grid grid-cols-2 gap-3 ">
                  {student.resume.skills.map((sk) => {
                    return (
                      <div className=" mb-5 flex items-center justify-between border-l-1 border-gray-300 px-3">
                        <div>
                          <div className="text-xl font-semibold">
                            {sk.skill}
                          </div>
                          <div className="text-gray-400">{sk.status}</div>
                        </div>

                        <div className=" text-2xl  flex items-center ">
                          <div className="text-gray-400 hover:text-gray-500">
                            <EditSkills id={sk.id} />
                          </div>
                          <div
                            onClick={() => deleteSkillsHandyy(sk.id)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="text-blue-400 cursor-pointer flex items-center justify-center">
                    <AddSkills />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {student && student.resume.projects ? (
              <div
                id="education"
                className="my-5 border-b border-gray-300 py-5 w-full min-h-[20vh]  flex flex-col md:flex-row lg:flex-row "
              >
                <div className="w-[30%] min-h-[100%]">
                  <div className="text-xl  font-semibold">Add projects</div>
                </div>
                <div className="w-[70%] min-h-[100%] ">
                  {student.resume.projects.map((pr) => {
                    return (
                      <div
                        key={pr.id}
                        className=" mb-5 flex items-center justify-between"
                      >
                        <div>
                        <div className="text-xl font-semibold">{pr.title}</div>
                        <div className="text-blue-400 font-light cursor-pointer">
                          {pr.link}
                        </div>
                        <div className="text-gray-400">{pr.desc}</div>
                        </div>

                        <div className=" text-2xl  flex  items-center ">
                          <div className="text-gray-400 hover:text-gray-500">
                            <EditProjects id={pr.id} />
                          </div>
                          <div
                            onClick={() => deleteProjeectsHandyy(pr.id)}
                            className="text-gray-400 hover:text-gray-500 first-letter: cursor-pointer"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="w-full h-auto bg-blue-300 py-2 rounded-lg cursor-pointer flex items-center justify-center">
                    <AiOutlinePlus /> <AddProjects/>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
