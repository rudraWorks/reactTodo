import React from 'react'
import InputTextBox from '../UI/Input'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { localTaskActions } from '../store/locatTasks'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Modal from '../overlays/Modal'

const STYLES = {
    border:"1px solid black",
    padding:"10px",
    minWidth:"70%",
    textAlign:"center",
    height:"100%",
    background:"lightgreen"
}

function AddTask() {

    let [inputTask,setInputTask] = useState("")
    let [popup,setPopup] = useState({show:false,message:""})

    let dispatch = useDispatch()
    let isDarkTheme = useSelector(state=>state.theme.darkTheme)

    function formSubmitHandler(e){ 
        e.preventDefault()
        let task = e.target.task.value
        if(task.trim()===""){
            return setPopup({show:true,message:"Input task can't be empty!"})
        }
        setPopup({show:false,message:""})
        dispatch(localTaskActions.addTask({text:task,date:new Date().toISOString(),id:Date.now()}))
        setInputTask("")
    }

    return (
        <div style={{...STYLES,background:isDarkTheme?"gray":"lightgreen",color:isDarkTheme?"white":"black"}}>
            <h1>Add Task</h1>
            <Modal popup={popup} closeModal={()=>setPopup(false)}/>  
            <br></br><br></br>
            <form onSubmit={formSubmitHandler}>
                <InputTextBox value={inputTask} onChange={(e)=>setInputTask(e.target.value)} name='task' placeholder='Write your task...'></InputTextBox>
                <br></br><br></br>
                <Button>Add Task</Button>
            </form>
            
        </div>
  )
}

export default AddTask