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
