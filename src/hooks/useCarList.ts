import { useQuery } from 'react-query';
import { fetchCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';

export function useCarList({ segment }: { segment?: 'C' | 'D' | 'E' | 'SUV' }) {
  const { data } = useQuery<CarItem[]>(
    ['getCarList', segment],
    () => fetchCarList({ segment }),
    { suspense: true }
  );

  if (data == null) {
    throw new Error('데이터를 로드하는데 실패했습니다.');
  }

  return data;
}
