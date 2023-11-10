import axios from "@/utils/axios";
import { addEmploye, addError, removeEmploye  } from "../Reducers/employeReducer";

export const asyncCurrentEmploye = () => async (dispatch) => {
  try {
    const { data } = await axios.post("/employe");
    // console.log(data);
    dispatch(addEmploye(data.user));
  } catch (error) {
    // console.log(error);
    dispatch(addError(error.response.data.message));
  }
};


export const asyncRegisterEmploye = (employe) => async (dispatch) => {
  try {
    const { data } = await axios.post("/employe/register", employe);
    asyncCurrentEmploye();
    dispatch(addEmploye(data));
  } catch (error) {
    console.log(error);
    dispatch(addError(error.response.data.message));
  }
};

export const asyncLoginEmploye = (employe) => async (dispatch) => {
  try {
    const { data } = await axios.post("/employe/login", employe);
    asyncCurrentEmploye();
    dispatch(addEmploye(data));
  } catch (error) {
    console.log(error);
    dispatch(addError(error.response.data.message));
  }
};

export const asyncLogoutEmploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/employe/logout");
    console.log("Logged out ...");
    dispatch(removeEmploye());
  } catch (error) {
    dispatch(addError(error.response.data.message));
  }
};

export const asyncEmployeProfileUpdate =
  (formDataObj) => async (dispatch, getState) => {
    const { employe } = getState().employeReducer;
    console.log(employe._id, "this is ksjfkdj")
    try {
      const { data } = await axios.post(
        `/employe/profile/${employe._id}`,
        formDataObj
      );
      dispatch(asyncCurrentEmploye());
      // console.log(data)
    } catch (error) {
      dispatch(addError(error.response.data.message));
      console.log(error);
    }
  };

export const asyncUpdateEmploye = (upEmploye) => async (dispatch, getState) => {
  const { employe } = getState().employeReducer;
  try {

    const { data } = await axios.post(
      `/employe/update/${employe._id}`,
      upEmploye
    );

    dispatch(asyncCurrentEmploye());
    console.log(data);
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error);
  }
};

export const asyncEmployeSendmail = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/send-mail/", email);

    console.log(data);
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error);
  }
};

export const asyncEmployetOtp = (data) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/forget", data);
    dispatch(asyncCurrentStudent());
    // console.log(data)
  } catch (error) {
    // dispatch(addError(error.response.data.message));
    console.log(error);
  }
};



export const employeDelete =()=> async (dispatch, getState) => {

  try {
    await axios.get("/employe/delete");
    dispatch(removeEmploye())
  } catch (error) {
    console.log(error);
  }
};














// JOB --------------------------------------------------


export const createJob = (jobData) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/job/create", jobData);
    dispatch(asyncCurrentEmploye())
    console.log(data)
  } catch (error) {
    // dispatch(addError(error.response.data.message));
    console.log(error);
  }
};



// InternShip --------------------------------------------------


export const createIntershipp = (jobData) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/internship/create", jobData);
    dispatch(asyncCurrentEmploye())
    console.log(data)
  } catch (error) {
    // dispatch(addError(error.response.data.message));
    console.log(error);
  }
};
