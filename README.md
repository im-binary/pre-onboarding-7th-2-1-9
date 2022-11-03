# pre-onboarding-7th-2-1-9

B2C 차량대여 서비스

## 전체 차량 조회

/api/cars

### 대형 차량 조회, 중형, 소형

ENUM
segment
C:소형, D:중형, E:대형, SUV:SUV

/api/cars?segment=C

fuelType
gasoline:가솔린, ev:전기, hybrid:하이브리드

## 차량 상세

fuelType: "gasoline" | "hybrid" | "ev"

/api/cars?segment=C&fuelType=ev

"createdAt": "2022-11-02T01:18:56.810Z",
날짜가 오늘일 경우 신규 버튼

type: 'all' | 'fullsize' | 'midsize' | 'small';

- 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
  - 제목: car.brand + car.name
  - 내용: 월 car.amount 원
  - 사진: 차량 사진

배열 0번째 사용
undefined {}
