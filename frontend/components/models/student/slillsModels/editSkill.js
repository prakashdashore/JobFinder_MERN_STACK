import React, { Children, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { asynEditSkills } from "@/store/Actions/studentActions";
import { BsFillPencilFill } from "react-icons/bs";
import { toast } from "react-toastify";



const EditSkills = ({id})=> {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const { student, errors, isAuthenticated } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [flag, setflag] = useState(false);

  const formHandyy = (data) => {
    dispatch(asynEditSkills( id , data))
    toast.success("Skills updated successfully")
    // console.log( "this  is "   ,data , id)
    // setflag(!flag);
  };

  useEffect(() => {

  } , [student]);

  // console.log("this is fleg" , flag)

  return (
    <>
      {/* <div onClick={onOpen} >Edit profile </div> */}
      <Button className="bg-transparent text-2xl text-gray-400 hover:text-gray-500 " onPress={onOpen}>
        < BsFillPencilFill />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold">Add education</h1>
              </ModalHeader>
              <ModalBody>
                {flag ? (
                  <h1 className="text-2xl font-semibold text-green-400">
                    Education saved !!
                  </h1>
                ) : (
                  <form
                    onSubmit={handleSubmit(formHandyy)}
                    className="col-span-full"
                  >
                    <div
                     
                      className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8"
                    >
                      <div className="relative">
                        <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                          Title/Degree
                        </p>
                        <input
                          placeholder="Enter email"
                          name="degree"
                          type="text"
                        
                          {...register("degree")}
                          className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="relative">
                        <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                            College/University/School
                        </p>
                        <input
                          placeholder="Enter college name or other"
                          name="college"
                          type="text"
                       
                          {...register("college")}
                          className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="relative">
                        <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                            Year of passing
                        </p>
                        <input
                          placeholder="Enter college name or other"
                          name="year"
                          type="text"
                         
                          {...register("year")}
                          className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="relative">
                        <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                            Percentage or CGPA
                        </p>
                        <input
                          placeholder="Enter college name or other"
                          name="percentage"
                          type="text"
                          {...register("percentage")}
                          className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        />
                      </div>

                      <button
                        type="submit "
                        className="bg-blue-400 w-full py-2 rounded-lg text-white "
                      >
                        Save
                        
                      </button>
                    </div>
                  </form>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditSkills;