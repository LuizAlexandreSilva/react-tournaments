import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #312E38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, -moz-user-input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #FF9000;
    --header-background: #28262E;
    --background: #312E38;
    --input-color: #232129;
    --input-placeholder: #666360;
    --white: #F4EDE8;
    --item-color: #3E3B47;
  }
`;
