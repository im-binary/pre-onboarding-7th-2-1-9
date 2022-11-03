import { css, Global } from '@emotion/react';
import TopBar from '../components/TopBar';

const fullHeight = css`
  html,
  body,
  #__next {
    height: 100%;
    div {
      height: 100%;
      overflow: hidden;
    }
  }
`;
const NotFound = () => {
  return (
    <>
      <Global styles={fullHeight} />
      <TopBar title={'안내'} backButton />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <h1>찾을 수 없습니다.</h1>
      </div>
    </>
  );
};

export default NotFound;
