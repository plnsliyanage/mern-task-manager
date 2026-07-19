import API from "../../services/axios";


// Register user

export const registerUser = async(userData)=>{

const response =
await API.post(
"/auth/register",
userData
);

return response.data;

};



// Login user

export const loginUser = async(userData)=>{

const response =
await API.post(
"/auth/login",
userData
);

return response.data;

};



// Get current user

export const getCurrentUser = async()=>{

const response =
await API.get(
"/auth/me"
);

return response.data;

};