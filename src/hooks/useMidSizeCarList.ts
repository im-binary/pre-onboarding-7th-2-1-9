import { getMidSizeCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useMidSizeCarList({ segment }: { segment: string }) {
  const { data: midSizeCarList, invalidate } = useFetch<CarItem[]>(
    ['getMidSizeCarList'],
    () => getMidSizeCarList({ segment })
  );

  return [midSizeCarList, invalidate] as const;
}
