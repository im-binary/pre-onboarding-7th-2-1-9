import { getSmallSizeCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useSmallSizeCarList({ segment }: { segment: string }) {
  const { data: smallSizeCarList, invalidate } = useFetch<CarItem[]>(
    ['getSmallSizeCarList'],
    () => getSmallSizeCarList({ segment })
  );

  return [smallSizeCarList, invalidate] as const;
}
