import React from 'react'
import Checkbox from '../UI/Checkbox'
import { useDispatch,useSelector } from 'react-redux'
import { themeActions } from '../store/theme'
import NavbarDiv from '../UI/NavbarDiv'
import { pageToShowActions } from '../store/pageToShow'

function Navbar() {

  const dispatch = useDispatch() 
  const isDarkTheme = useSelector(state=>state.theme.darkTheme)


  return (
    <>
        <NavbarDiv isDarkTheme={isDarkTheme}>
            <div style={{fontSize:'30px'}}>ElegantTodo</div>

            <div style={{marginLeft:'auto'}}>

                <div  onClick={()=>{dispatch(pageToShowActions.addTask())}}>
                  Add Task
                </div>

                <div onClick={()=>{dispatch(pageToShowActions.pendingTasks())}}>
                  Pending Tasks
                </div>

                <div onClick={()=>{dispatch(pageToShowActions.completedTasks())}}>
                  Completed Tasks
                </div>

                <div>
                    <Checkbox onInput={()=>dispatch(themeActions.toggleTheme())}></Checkbox>
                </div>

            </div>

        </NavbarDiv>
    </>
  )
}

export default Navbar