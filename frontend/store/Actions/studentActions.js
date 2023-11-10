import axios from "@/utils/axios";
const {
  addStudent,
  removeStudent,
  addError,
  removeError,
  addAllJobs,
  addAllInternships
} = require("../Reducers/studentReducer");

export const asyncCurrentStudent = () => async (dispatch) => {
  try {
    const { data } = await axios.post("/student");
    console.log(data);
    dispatch(addStudent(data.student));
  } catch (error) {
    console.log(error);
    dispatch(addError(error.response.data.message));
  }
};

export const asyncRegisterStudent = (student) => async (dispatch) => {
  try {
    const { data } = await axios.post("/student/register", student);
    asyncCurrentStudent();
    dispatch(addStudent(data));
  } catch (error) {
    console.log(error)
    dispatch(addError(error.response.data.message));
  }
};

export const asyncLoginStudent = (student) => async (dispatch) => {
    try {
        const { data } = await axios.post("/student/login", student);
        asyncCurrentStudent();
        dispatch(addStudent(data));
    } catch (error) {
        console.log(error)
        dispatch(addError(error.response.data.message));
    }
}


export const asyncLogoutStudent = () => async (dispatch, getState) => {
    try {
      const { data } = await axios.get("/student/logout");
      console.log("Logged out ...");
      dispatch(removeStudent());
    } catch (error) {
      dispatch(addError(error.response.data.message));
    }
  };


  
export const asyncProfileUpdate = (formDataObj) => async (dispatch, getState) => {

    const { student } = getState().studentReducer;
    try {
      const { data } = await axios.post("/student/profile/"+student._id , formDataObj);
      dispatch(asyncCurrentStudent())
      // console.log(data)
      
    } catch (error) {
      dispatch(addError(error.response.data.message));
      console.log(error)
    }
  };

  
export const asyncUpdateStudent = (upStudent) => async (dispatch, getState) => {

  const { student } = getState().studentReducer;
  try {
    const { data } = await axios.post("/student/update/"+student._id , upStudent);

    dispatch(asyncCurrentStudent())
    console.log(data)

  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};



export const asyncStudentSendmail = (email) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/send-mail/" ,email);
    
    console.log(data)

  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asyncStudentOtp = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/student/forget" ,data);
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


//.................Resume Actions.......................

// Addeducation
export const asyncAddEducation = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/add-education" ,data);
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynDeleteEducation = (id) => async (dispatch, getState) => {
  try {
     await axios.post("/delete-education/"+id , id );
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynEditEducation = (id , data) => async (dispatch, getState) => {
  try {
     await axios.post("/edit-education/"+id , data );
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};



// ADDJOBS------------------------------------------------


export const asyncAddJobs = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/add-job" ,data);
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynDeleteJobs = (id) => async (dispatch, getState) => {
  try {
     await axios.post("/delete-job/"+id , id );
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynEditJobs = (id , data) => async (dispatch, getState) => {
  try {
     await axios.post("/edit-job/"+id , data );
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};




// INTERNSHIPSS------------------------------------------------


export const asyncAddInternShips = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/add-internship" ,data);
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynDeleteInternShips = (id) => async (dispatch, getState) => {
  try {
     await axios.post("/delete-internship/"+id , id );
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynEditInternShips = (id , data) => async (dispatch, getState) => {
  try {
     await axios.post("/edit-internship/"+id , data );
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


// POSITIONS OF RESPONSIBILITY------------------------------------------------
export const asyncAddPositionOfResp = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/add-positionofresponsiblity" ,data);
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynDeletePositionOfResp = (id) => async (dispatch, getState) => {
  try {
     await axios.post("/delete-positionofresponsiblity/"+id , id );
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynEditPositionOfResp = (id , data) => async (dispatch, getState) => {
  try {
     await axios.post("/edit-positionofresponsiblity/"+id , data );
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};



// SKILLLS------------------------------------------------

export const asyncAddSkills = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/add-skill" ,data);
    dispatch(asyncCurrentStudent())
  
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};

export const asynDeleteSkills = (id) => async (dispatch, getState) => {
  try {
     await axios.post("/delete-skill/"+id , id );
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynEditSkills = (id , data) => async (dispatch, getState) => {
  try {
     await axios.post("/edit-skill/"+id , data );
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};

// PROJECTSS------------------------------------------------

export const asyncAddProjects = (data) => async (dispatch, getState) => {
  try {
     await axios.post("/add-project" ,data);
    dispatch(asyncCurrentStudent())
  
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};

export const asynDeleteProjects = (id) => async (dispatch, getState) => {
  try {
     await axios.post("/delete-project/"+id , id );
    dispatch(asyncCurrentStudent())
    
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};


export const asynEditProjects = (id , data) => async (dispatch, getState) => {
  try {
     await axios.post("/edit-project/"+id , data );
    dispatch(asyncCurrentStudent())
    // console.log(data)
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};

// ---------------------------- JOBS -------------------




export const asyncFindallJobs = () => async (dispatch, getState) => {
  try {
    const {data}  = await axios.post('/student/find/alljobs');
    dispatch(addAllJobs(data.jobs))
    // console.log(data)  
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error.response.data.message)
  }
};


export const asyncFindallInternships = () => async (dispatch, getState) => {

  try {
    const {data}  = await axios.post('/student/find/allinternships');
    dispatch(addAllInternships(data.internships))
    // console.log(data)  
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
};





export const asyncApplyJobsStudent = (id) => async (dispatch, getState) => {
  try {
     await axios.post(`/student/apply/job/${id}`);
    dispatch(asyncCurrentStudent())
    asyncFindallJobs()
    // console.log(data)  
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
  
};

export const asyncApplyIntStudent = (id) => async (dispatch, getState) => {
  try {
     await axios.post(`/student/apply/internship/${id}`);
    dispatch(asyncCurrentStudent())
    asyncFindallInternships()
    // console.log(data)  
  } catch (error) {
    dispatch(addError(error.response.data.message));
    console.log(error)
  }
  
};