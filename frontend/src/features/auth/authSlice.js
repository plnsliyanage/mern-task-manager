import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  getCurrentUser
} from "./authAPI";


// Register

export const register = createAsyncThunk(
  "auth/register",

  async(userData,{rejectWithValue})=>{

    try{

      const data = await registerUser(userData);

      localStorage.setItem(
        "token",
        data.token
      );

      return data;


    }catch(error){

      return rejectWithValue(
        error.response.data.message
      );

    }

  }
);



// Login

export const login = createAsyncThunk(
  "auth/login",

  async(userData,{rejectWithValue})=>{

    try{

      const data = await loginUser(userData);


      localStorage.setItem(
        "token",
        data.token
      );


      return data;


    }catch(error){

      return rejectWithValue(
        error.response.data.message
      );

    }

  }
);



// Get current user

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",

  async(_, {rejectWithValue})=>{

    try{

      const user = await getCurrentUser();

      return user;


    }catch(error){

      return rejectWithValue(
        error.response.data.message
      );

    }

  }
);



const initialState={

  user:null,

  token:localStorage.getItem("token"),

  loading:false,

  error:null

};



const authSlice=createSlice({

name:"auth",

initialState,


reducers:{


logout:(state)=>{

state.user=null;

state.token=null;

localStorage.removeItem("token");

}


},



extraReducers:(builder)=>{


builder


// Register

.addCase(register.pending,(state)=>{

state.loading=true;

})


.addCase(register.fulfilled,(state,action)=>{

state.loading=false;

state.user=action.payload;

state.token=action.payload.token;

})


.addCase(register.rejected,(state,action)=>{

state.loading=false;

state.error=action.payload;

})



// Login

.addCase(login.pending,(state)=>{

state.loading=true;

state.error=null;

})


.addCase(login.fulfilled,(state,action)=>{

state.loading=false;

state.user=action.payload;

state.token=action.payload.token;

})


.addCase(login.rejected,(state,action)=>{

state.loading=false;

state.error=action.payload;

})



// Fetch user

.addCase(fetchUser.fulfilled,(state,action)=>{

state.user=action.payload;

})


.addCase(fetchUser.rejected,(state)=>{

state.user=null;

state.token=null;

localStorage.removeItem("token");

});


}


});


export const {logout}=authSlice.actions;


export default authSlice.reducer;