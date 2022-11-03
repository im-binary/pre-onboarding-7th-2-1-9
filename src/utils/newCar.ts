export function newCar(date: Date) {
  if (isNaN(Date.parse(String(date)))) {
    throw new Error('날짜 형식이 올바르지 않습니다.');
  }
  const now = new Date();
  const difference = now.getTime() - date.getTime();

  // 차량 생성일로부터 1일 이내일 경우 신규
  return Math.abs(difference / (1000 * 60 * 60 * 24)) <= 1;
}
