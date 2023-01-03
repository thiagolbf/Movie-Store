import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }


 :root{

    --white: #FFFFFF;
    --black: #000000;
    --red: #FF0000;
    --grey: #a9a9a9;
    --lightGrey: #dcdcdc;
    --lightYellow: #fdf59c;
    --lightGreen: #a4c9bb;
    --lightPurple: #857db1;
    --lightBlue: #4169e1;
    


    --roboto: 'Roboto', sans-serif;



    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ol, ul, li {
        list-style: none;
    }

 }


`;
