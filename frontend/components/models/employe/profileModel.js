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
import { asyncEmployeProfileUpdate } from "@/store/Actions/employeActions";
import { toast } from "react-toastify";


export default function profileModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {student , errors ,  isAuthenticated} = useSelector(state => state.employeReducer)
  const dispatch = useDispatch()
  const router = useRouter();
  const [flag, setflag] = useState(false)

  const formHandyy = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.set("organistionlogo", e.target.organistionlogo.files[0]);
    dispatch(asyncEmployeProfileUpdate(formdata))
    setflag(!flag);
    toast.success("Employe Avtar updated !!")

  };


  useEffect(()=>{
    setflag(false)
  
    console.log("this is bdli" , flag)

  },[student])


  return (
    <>
      {/* <div onClick={onOpen} >Edit profile </div> */}
      <Button className="bg-transparent text-green-300 mr-2 " onPress={onOpen}>Edit Avtar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Choose a profile photo
              </ModalHeader>
              <ModalBody>
                {
                  flag ? 
                  <h1 className="text-2xl font-semibold text-green-400" >Profile updated successfully !!</h1>
                  : <form
                  onSubmit={formHandyy}
                  enctype="multipart/form-data"
                  className="col-span-full"
                >
            
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        name="organistionlogo"
                        type="file"
                        class="hidden"
                      />
                    </label>
                  </div>

                  <button
                    className="bg-blue-500 mt-5 rounded-lg  px-10 py-2 font-semibold text-white"
                    type="submit"
                  >
                    submit
                  </button>
                </form>
                }
                


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
