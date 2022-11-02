import { getCarDetail } from '../apis/car';
import { CarItem } from '../model/CarItem';
import { useFetch } from './useFetch';

export function useCarDetail({
  segment,
  fuelType,
}: {
  segment: string;
  fuelType: string;
}) {
  const { data: carDetail, invalidate } = useFetch<CarItem>(
    ['getCarDetail'],
    () => getCarDetail({ segment, fuelType })
  );

  return [carDetail, invalidate] as const;
}
