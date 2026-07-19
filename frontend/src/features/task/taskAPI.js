import axios from "axios";


const API_URL = "http://localhost:5000/api/tasks";


// GET ALL TASKS

export const getTasksAPI = async(token)=>{


const response = await axios.get(

API_URL,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);


return response.data;


};



// CREATE TASK

export const createTaskAPI = async(
taskData,
token
)=>{


const response = await axios.post(

API_URL,

taskData,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);


return response.data;


};