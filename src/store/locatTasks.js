import { createSlice } from "@reduxjs/toolkit";



let fetchTasks = () =>{

    if(!localStorage.getItem('localTasks')){
        localStorage.setItem('localTasks',JSON.stringify([]))
    }
    let tasks = JSON.parse(localStorage.getItem('localTasks'))
    return tasks
}

const initialState = {
    tasks : fetchTasks()
}


function saveToLocalStorage(newTaskArray){
    localStorage.setItem('localTasks',JSON.stringify(newTaskArray))
}


const localTasksSlice = createSlice({
    name:'localTask',
    initialState,
    reducers:{
        addTask(state,actions){
            state.tasks =[{description:actions.payload.text,dateAdded:actions.payload.date,id:actions.payload.id,done:false},...state.tasks]
            saveToLocalStorage(state.tasks)
        },
        completeTask(state,actions){
            let newArr = state.tasks.filter((task)=>task.id!=actions.payload.id)
            state.tasks=newArr 
            saveToLocalStorage(state.tasks)
        }
    }
}) 

export let localTaskActions = localTasksSlice.actions 
export default localTasksSlice.reducer