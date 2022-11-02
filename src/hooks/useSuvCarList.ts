import { getFullSizeCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useSuvCarList({ segment }: { segment: string }) {
  const { data: suvCarList, invalidate } = useFetch<CarItem[]>(
    ['getSuvCarList'],
    () => getFullSizeCarList({ segment })
  );

  return [suvCarList, invalidate] as const;
}
