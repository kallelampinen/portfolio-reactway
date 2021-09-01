import { createGlobalStyle } from "styled-components";
import Background from "./images/background.jpg";

export const GlobalStyles = createGlobalStyle`


:root{
       
    --white: #fff;
    --black: #000; 

}

*{

    padding:0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-image: url(${Background});
    background-size: cover;
    background-repeat: repeat-x;
    height:100vh;
    background-position: center;
    width:100%;
    
   
}







`;
