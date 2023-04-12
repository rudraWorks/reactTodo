import React from 'react'
import CardDiv from '../UI/CardDiv'
import moment from "moment"
import {useDispatch} from "react-redux"
import { localTaskActions } from '../store/locatTasks'

function Card({data,isDarkTheme}) {

  let dispatch = useDispatch()

  return (
    <CardDiv isDarkTheme={isDarkTheme}> 
        <div style={{fontSize:"20px"}}>{data.description} </div>
        <div id='date' style={{marginLeft:"auto",display:"flex"}}>
            <div style={{marginRight:"5px"}}>{moment( data.dateAdded).format("MMM Do YY") }   </div>  
            <div style={{marginLeft:"5px",cursor:"pointer"}}> <input onInput={()=>{ dispatch(localTaskActions.completeTask({id:data.id})) }} type='checkbox'></input></div>
        </div>
    </CardDiv>
  )
}

export default Card