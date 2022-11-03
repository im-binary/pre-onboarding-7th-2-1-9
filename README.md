# [🚘 배포링크](https://pre-onboarding-7th-2-1-9-two.vercel.app/)

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

# Assignment 1

- Figma 상의 디자인 및 기능 구현
  - 모바일 웹 기준으로 제작
  - 450px ~ 360px까지 고려해서 제작
- 필수 요구 사항
  - Figma 상의 디자인 및 기능 구현

| chrome                                                                                                           | safari                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![chrome](https://user-images.githubusercontent.com/76990149/199666326-9bb5fc44-ef76-416d-a647-2c72029e0e03.gif) | ![safari](https://user-images.githubusercontent.com/76990149/199666355-af7bf211-a756-434b-9283-8a7147040dbb.gif) |

# Assignment 2

- 차량 리스트

| 차량이 없을 때                                                                                                                                                                | 차량을 불러올 때                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1072" alt="스크린샷 2022-11-03 오후 4 27 20" src="https://user-images.githubusercontent.com/76990149/199666817-7cb1e1c6-637b-465c-87a7-b7ac45881a7b.png"> | <img width="1072" alt="스크린샷 2022-11-03 오후 4 30 18" src="https://user-images.githubusercontent.com/76990149/199667300-598cf006-6352-414a-8c47-bedfaa655bbd.png"> |

## 차량이 없을 때

[src/components/SSRSuspense.tsx](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/69efaf03b99798be3fd20e6398a21c2c4738f988/src/components/SSRSuspense.tsx#L6-L22)

```js
export function SSRSuspense({ fallback, children, ...props }: Props) {
  const [isMounted, setIsMounted] = useState<boolean>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return (
    <Suspense fallback={fallback} {...props}>
      {children}
    </Suspense>
  );
}
```

- SSR 환경에서는 Suspense를 사용할 수 없어, client가 mount 되고 나서 Suspense를 사용할 수 있도록 `<SSRSuspense>` 컴포넌트를 만들어주었습니다.

[src/pages/index.ts](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/69efaf03b99798be3fd20e6398a21c2c4738f988/src/pages/index.tsx#L6-L16)

```js
export default function CarListPage() {
  return (
    <>
      <TabLayout>
        <SSRSuspense fallback={<Loading />}>
          <CarCatalogList />
        </SSRSuspense>
      </TabLayout>
    </>
  );
}
```

- 비동기 작업을 하는 컴포넌트를 `<SSRSuspense>` 컴포넌트로 감싸 suspense에게 비동기 로딩 처리를 모두 맡겼습니다.

- isLoading 과 같은 상태를 만들어 로딩 상태를 판별하지 않으니 컴포넌트의 역할이 분리되어 개발하기 편했습니다.

# Assignment 3

- 차량 상세

<img width="1072" alt="스크린샷 2022-11-03 오후 4 46 17" src="https://user-images.githubusercontent.com/76990149/199669527-7e806ee0-e776-4b78-a390-75371c081d78.png">

[src/pages/[carId].tsx](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/69efaf03b99798be3fd20e6398a21c2c4738f988/src/pages/%5BcarId%5D.tsx#L14-L30)

```js
export default function CarDetailPage({ car }: CarDetailPageProps) {
  return (
    <>
      <SEOHead car={car} />
      <TopBar title="차량 상세" backButton />
      <Main>
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <CarDetail car={car} />
        </motion.div>
      </Main>
    </>
  );
}
```

- 페이지에서는 상세 페이지의 레이아웃을 한 눈에 알아보도록 했습니다.

[src/components/car/CarDetail.tsx](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/69efaf03b99798be3fd20e6398a21c2c4738f988/src/components/car/CarDetail.tsx#L13-L42)

```js
export default function CarDetail({ car }: CarDetailProps) {
  const { attribute, amount, startDate, insurance, additionalProducts } = car;

  return (
    <>
      <Head>
        <title>
          {`${attribute.brand} - ${attribute.name} | 차량 대여 서비스`}
        </title>
      </Head>

      <article
        css={css`
          padding-bottom: 20px;
        `}
      >
        {/* 차량 이미지, 요금, 이름 */}
        <Summary attribute={attribute} amount={amount} />

        {/* 차량정보 */}
        <Info attribute={attribute} startDate={startDate} />

        {/* 보험 */}
        <Insurance insurance={insurance} />

        {/* 추가상품 */}
        <Additional additionalProducts={additionalProducts} />
      </article>
    </>
  );
}
```

- `<CarDetail>` 컴포넌트에서 상세 페이지를 조금 더 작은 단위의 컴포넌트로 나누어 작업했습니다.

# Assignment 4 (추가 구현 사항)

- SEO 구현

- 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
  - 제목: car.brand + car.name
  - 내용: 월 car.amount 원
  - 사진: 차량 사진카카오 | 페이스북

| 카카오                                                                                                                                                                       | 페이스북                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="346" alt="스크린샷 2022-11-03 오후 1 04 56" src="https://user-images.githubusercontent.com/76990149/199670242-be7a4c2a-ad5d-4b92-b99a-294c942ca9fd.png"> | <img width="745" alt="스크린샷 2022-11-03 오후 1 04 11" src="https://user-images.githubusercontent.com/76990149/199670266-a006bc6c-15da-4d6c-a681-7e8737558e22.png"> |

[src/components/SEOHead.tsx](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/69efaf03b99798be3fd20e6398a21c2c4738f988/src/components/SEOHead.tsx#L4-L31)

```js
export default function SEOHead({ car }: { car: CarItem }) {
  const { id, attribute, amount } = car;

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://pre-onboarding-7th-2-1-9-two.vercel.app/${id}`}
        />
        <meta property="og:image" content={`${attribute.imageUrl}`} />
        <meta
          property="og:title"
          content={`${attribute.brand} - ${attribute.name} | 차량 대여 서비스`}
        />
        <meta
          property="og:description"
          content={`${attribute.brand} | ${attribute.name} | 월 ${amount} 원`}
        />
        <meta property="og:site_name" content="차량 대여 서비스" />
        <meta property="og:locale" content="en_KO" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
    </>
  );
}
```

`<meta>` 요소만 한 곳에서 관리할 수 있도록 SEO만 전담하는 컴포넌트를 만들었습니다.

# Assignment 5 (추가 구현 사항)

![애니메이션](https://user-images.githubusercontent.com/76990149/199699597-478dfed4-e413-49b4-bc3d-5c97b8a4dcd4.gif)

- framer-motion 라이브러리를 이용하여 서버에서 데이터를 다 받아온 뒤 보여 줄 부드러운 애니메이션을 추가했습니다.

- hover 시 배경색이 변하도록 했습니다.

# 중심 기능..?!

## 응답받은 데이터 변환해주기

### 차종, 연료 변환

<img width="455" alt="스크린샷 2022-11-03 오후 7 40 22" src="https://user-images.githubusercontent.com/76990149/199700480-85cbccda-5bb2-421a-8ff6-d84c73f5f115.png">

제 생각에는 데이터를 사용자가 보기 편하게 가공하는 것도 중요하지 않았나 생각합니다.
저는 switch 문으로 문자열을 변환시켜주도록 했습니다.
앞으로 다른 옵션이 추가되더라도 편안하지 않을까! 라는 생각으로 작성했습니다.

[src/utils/convertCarAttribute.ts](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/c3879c141b9b46c3643aca9c859b76c52e37e65e/src/utils/convertCarAttribute.ts#L1-L27)

```js
export function convertSegment(segment: string) {
  switch (segment) {
    case 'C':
      return '소형';
    case 'D':
      return '중형';
    case 'E':
      return '대형';
    case 'SUV':
      return 'SUV';
    default:
      return '정보가 없습니다';
  }
}

export function convertFuelType(fuelType: string) {
  switch (fuelType) {
    case 'gasoline':
      return '가솔린';
    case 'hybrid':
      return '하이브리드';
    case 'ev':
      return '전기';
    default:
      return '정보가 없습니다';
  }
}
```

### 돈 단위 변환

<img width="200" alt="스크린샷 2022-11-03 오후 7 41 43" src="https://user-images.githubusercontent.com/76990149/199700732-a565b4b0-4902-4186-b988-a8d25b03ff05.png">

뒤에서 3자리마다 `,` 를 찍어주어야 하는 문제를 아래처럼 해결했습니다.

[src/utils/convertCurrency.ts](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/c3879c141b9b46c3643aca9c859b76c52e37e65e/src/utils/convertCurrency.ts#L1-L3)

```js
export function convertCurrency(money: number) {
  return money.toLocaleString('ko-KR');
}
```

<img width="436" alt="스크린샷 2022-11-03 오후 7 44 00" src="https://user-images.githubusercontent.com/76990149/199701152-6e610fc1-42e2-4a1d-96cd-a5179e7a1133.png">

### 날짜와 요일 변환

[src/utils/date.ts](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/c3879c141b9b46c3643aca9c859b76c52e37e65e/src/utils/date.ts#L1-L13)

```js
export function formatDate(date: Date) {
  if (isNaN(Date.parse(String(date)))) {
    throw new Error('날짜 형식이 올바르지 않습니다.');
  }
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  const yoil = week[date.getDay()];

  return `${mm}월 ${dd}일 (${yoil})`;
}
```

### 신규 라벨

[src/utils/newCar.ts](https://github.com/pongdang/pre-onboarding-7th-2-1-9/blob/c3879c141b9b46c3643aca9c859b76c52e37e65e/src/utils/newCar.ts#L1-L10)

```js
export function newCar(date: Date) {
  if (isNaN(Date.parse(String(date)))) {
    throw new Error('날짜 형식이 올바르지 않습니다.');
  }
  const now = new Date();
  const difference = now.getTime() - date.getTime();

  // 차량 생성일로부터 1일 이내일 경우 신규
  return Math.abs(difference / (1000 * 60 * 60 * 24)) <= 1;
}
```
