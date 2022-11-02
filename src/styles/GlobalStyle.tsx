import { Global, css } from '@emotion/react';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: inherit;
  }

  /* reset */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  :root {
    font-size: 10px;
  }

  button {
    border: 0;
    background-color: transparent;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    appearance: none;
    cursor: pointer;
  }

  /* layout */

  body {
    max-width: 450px;
    margin: 0 auto;
    border: 1px solid blue;
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyles} />;
}
