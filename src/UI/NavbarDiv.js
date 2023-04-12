import styled from "styled-components";


let NavbarDiv = styled.div`

    background-color: ${(props)=>props.isDarkTheme?"gray":"skyblue"};
    color: ${(props)=>props.isDarkTheme?"white":"black"};

    width: 100%;
    // height: 70px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex-wrap:wrap;
    &>div{
        height:30px;
        display:flex;
        align-items:center;
        padding:5px;
        margin:10px;
        cursor:pointer;
    }
    &>div>div{
        height:30px;
        display:flex;
        align-items:center;
        padding:5px;
        margin:10px;
        cursor:pointer;
    }
    @media only screen and (max-width: 600px) {
        flex-direction:column;
    }
`

export default NavbarDiv