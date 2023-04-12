import React from 'react'
import ReactDom from 'react-dom'
import Overlay from '../UI/Overlay'

const MODAL_STYLES = {
    background:'tan',
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    width:'30%',
    minHeight:'30%',
    minWidth:'300px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:'10px',
    textAlign:'center',
    zIndex:10,
}

function Modal({popup,closeModal}) {
  
    if(!popup.show)return null
    return ReactDom.createPortal(
        <>
           <Overlay></Overlay>
            <div style={MODAL_STYLES}>
               <h3>{popup.message}</h3>
               <button onClick={()=>closeModal()} style={{marginTop:"auto",width:"100%",height:"30px"}}>close</button>
            </div>
        </>
        ,document.getElementById('portal')
    )
}

export default Modal