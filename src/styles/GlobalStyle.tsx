import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    font-size: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default function GlobalStyle() {
  return <Global styles={globalStyles} />;
}
