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
