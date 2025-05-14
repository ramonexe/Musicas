import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #282c34;
    font-family: "Montserrat", sans-serif;

    a {
      text-decoration: none;
    }
  }

  #root {
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`