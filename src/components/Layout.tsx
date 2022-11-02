import { css } from '@emotion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        css={css`
          box-shadow: 1px 0px 4px 1px rgb(22 22 22 / 20%);
        `}
      >
        {children}
      </div>
    </>
  );
}
