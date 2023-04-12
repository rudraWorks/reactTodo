import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addTask:true,
    pendingTasks:false,
    completedTasks:false
}

const pageToShowSlice = createSlice({
    name:'pageToShow',
    initialState,
    reducers:{
        addTask(state){
            {
                state.addTask=true
                state.pendingTasks=false 
                state.completedTasks=false
            }
    
        },
        pendingTasks(state){
            {
                state.addTask=false
                state.pendingTasks=true 
                state.completedTasks=false
            }

        },
        completedTasks(state){
            {
                state.addTask=false 
                state.completedTasks=true
                state.pendingTasks=false 

            }
        }
    }
})

export const pageToShowActions = pageToShowSlice.actions
export default pageToShowSlice.reducer