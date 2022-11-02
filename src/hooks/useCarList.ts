import { getCategoryCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useCarList({ segment }: { segment: string }) {
  const { data: carList, invalidate } = useFetch<CarItem[]>(
    ['getCarList'],
    () => getCategoryCarList({ segment })
  );

  return [carList, invalidate] as const;
}
