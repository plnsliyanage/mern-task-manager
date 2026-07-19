import axios from "axios";


const API_URL = "http://localhost:5000/api/tasks";


// GET ALL TASKS

export const getTasksAPI = async (token) => {

    const response = await axios.get(

        API_URL,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;

};



// CREATE TASK

export const createTaskAPI = async (
    taskData,
    token
) => {


    const response = await axios.post(

        API_URL,

        taskData,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );


    return response.data;

};



// UPDATE TASK

export const updateTaskAPI = async (
    id,
    taskData,
    token
) => {


    const response = await axios.put(

        `${API_URL}/${id}`,

        taskData,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );


    return response.data;

};



// DELETE TASK

export const deleteTaskAPI = async (
    id,
    token
) => {


    const response = await axios.delete(

        `${API_URL}/${id}`,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );


    return response.data;

};



// UPDATE STATUS

export const updateTaskStatusAPI = async (
    id,
    status,
    token
) => {


    const response = await axios.patch(

        `${API_URL}/${id}/status`,

        {
            status
        },

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );


    return response.data;

};