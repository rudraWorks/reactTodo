import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function PendingTasks() {
    
    let taskArray = useSelector(state=>state.localTasks.tasks)
    let isDarkTheme = useSelector(state=>state.theme.darkTheme)

    return (
        <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>Pending Tasks</h1>
            <br></br>
            {
                taskArray.map((task)=>{
                    return <Card key={task.id} data={task} isDarkTheme={isDarkTheme}></Card>
                })
            }
        </div>
    )
}

export default PendingTasks