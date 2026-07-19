import {
createSlice
} from "@reduxjs/toolkit";



const initialState={

tasks:[],

loading:false,

error:null

};



const taskSlice=createSlice({

name:"tasks",

initialState,


reducers:{



setTasks:(state,action)=>{

state.tasks=action.payload;

},



addTask:(state,action)=>{

state.tasks.push(action.payload);

},



setLoading:(state,action)=>{

state.loading=action.payload;

},



setError:(state,action)=>{

state.error=action.payload;

}



}


});



export const {

setTasks,

addTask,

setLoading,

setError


}=taskSlice.actions;



export default taskSlice.reducer;