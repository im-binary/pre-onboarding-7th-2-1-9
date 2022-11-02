export function formatDate(date: Date) {
  if (isNaN(Date.parse(String(date)))) {
    throw new Error('날짜 형식이 올바르지 않습니다.');
  }

  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${yyyy}년 ${mm}월 ${dd}일`;
}
