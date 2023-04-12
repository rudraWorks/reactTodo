import styled from "styled-components";

const CardDiv = styled.div`

    max-width:500px;
    width:90%;
    margin:10px;
    padding:10px;
    background:${props=>props.isDarkTheme?"darkgray":"aqua"};
    display:flex;
    align-items:center;
    @media only screen and (max-width: 600px) {
        flex-direction:column;
        justify-content:center;
        &>div:last-child{
           margin-left:0;
           width:100%;
           display:flex;
           justify-content:space-around;
        }
    }
`

export default CardDiv