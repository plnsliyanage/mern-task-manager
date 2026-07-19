import axios from "axios";


const API_URL = "http://localhost:5000/api/tasks";


// CREATE TASK

export const createTaskAPI = async (
    taskData,
    token
) => {


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