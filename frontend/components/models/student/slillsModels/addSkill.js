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
import { asyncAddSkills } from "@/store/Actions/studentActions";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";

const addSkills = ()=> {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const { student, errors, isAuthenticated } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [flag, setflag] = useState(false);

  const formHandyy = (data) => {
    dispatch(asyncAddSkills(data))
    toast.success("Skill added successfully")
    // console.log( "this  is "   ,data)
  
    // setflag(!flag);
  };


  // useEffect(() => {

  // } , []);

  // console.log("this is fleg" , flag)

  return (
    <>
      {/* <div onClick={onOpen} >Edit profile </div> */}
      <Button className="bg-transparent text-blue-300 " onPress={onOpen}>
      <AiOutlinePlus />Add Skills
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold">Add Skills </h1>
              </ModalHeader>
              <ModalBody>
                {flag ? (
                  <h1 className="text-2xl font-semibold text-green-400">
                    Skill saved !!
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
                          skill
                        </p>
                        <input
                          placeholder="Enter skills "
                          name="skill"
                          type="text"
                          {...register("skill")}
                          className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="relative">
                        <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
                          Skill Lavel
                        </p>
                        <input
                          placeholder="like - beginer , intermediate , expert "
                          name="status"
                          type="text"
                          {...register("status")}
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

export default addSkills;