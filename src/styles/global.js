import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'europa', sans-serif;
    }

    body {
        overflow-x: hidden;
        position: relative;
    }

    #root {
        position: relative;
        min-height: 100vh;
    }


`;
