import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { Header } from '../../Header';

export default function TopBar() {
  const router = useRouter();
  return (
    <Header>
      <BackButton type="button" onClick={() => router.back()}>
        뒤로가기
      </BackButton>
      <h1>차량상세</h1>
    </Header>
  );
}

const BackButton = styled.button`
  background-image: url(/images/icons/back-icon.svg);
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  position: absolute;
  top: 18px;
  left: 20px;
  text-indent: -9999px;
`;
