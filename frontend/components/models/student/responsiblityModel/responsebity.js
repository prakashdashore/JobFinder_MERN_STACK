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
import { asyncAddPositionOfResp } from "@/store/Actions/studentActions";
import { toast } from "react-toastify";


const AddPositionOfResp = ()=> {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const { student, errors, isAuthenticated } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [flag, setflag] = useState(false);

  const formHandyy = (data) => {
    dispatch(asyncAddPositionOfResp(data))
    toast.success("Position of responsiblities added successfully")
    // console.log( "this  is "   ,data)
    // setflag(!flag);
  };


  // useEffect(() => {

  // } , []);

  // console.log("this is fleg" , flag)

  return (
    <>
      {/* <div onClick={onOpen} >Edit profile </div> */}
      <Button className="bg-transparent " onPress={onOpen}>
        Add position of responsiblities
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-2xl font-semibold">Add Job</h1>
              </ModalHeader>
              <ModalBody>
                {flag ? (
                  <h1 className="text-2xl font-semibold text-green-400">
                     saved !!
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
                            Discreption
                        </p>
                        <textarea
                        name="desc"
                        placeholder="Enter description"
                        {...register("desc")}
                     
                        rows={3}
                        className="block w-full rounded-md border-0 p-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue=''
                        >
                       
                        </textarea>
                        
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

export default AddPositionOfResp;