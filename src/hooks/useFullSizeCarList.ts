import { getFullSizeCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useFullSizeCarList({ segment }: { segment: string }) {
  const { data: fullSizeCarList, invalidate } = useFetch<CarItem[]>(
    ['getFullSizeCarList'],
    () => getFullSizeCarList({ segment })
  );

  return [fullSizeCarList, invalidate] as const;
}
