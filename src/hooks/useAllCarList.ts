import { getAllCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useAllCarList() {
  const { data: allCarList, invalidate } = useFetch<CarItem[]>(
    ['getAllCarList'],
    () => getAllCarList()
  );

  return [allCarList, invalidate] as const;
}
