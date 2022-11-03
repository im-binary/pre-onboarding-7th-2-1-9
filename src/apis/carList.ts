import { CarItem } from '../model/CarItem';
import { get } from './axiosInstance';

export const fetchCarList = async ({
  segment,
}: {
  segment?: 'C' | 'D' | 'E' | 'SUV';
} = {}) => {
  const { data } = await get<{ payload: CarItem[] }>({
    url: '/cars',
    params: segment == null ? {} : { segment },
  });

  return data.payload;
};
