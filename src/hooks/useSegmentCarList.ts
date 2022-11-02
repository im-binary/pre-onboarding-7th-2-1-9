import { getSegmentCarList } from '../apis/carList';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useSegmentCarList({ segment }: { segment: string }) {
  const { data: segmentCarList, invalidate } = useFetch<CarItem[]>(
    ['getSegmentCarList'],
    () => getSegmentCarList({ segment })
  );

  return [segmentCarList, invalidate] as const;
}
