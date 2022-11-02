import { get } from './axiosInstance';

export const getCar = async ({
  fuelType,
  segment,
}: {
  fuelType: string;
  segment: string;
}) => {
  const { data } = await get({
    url: `/cars?segment=${segment}&fuelType=${fuelType}`,
    qsData: { segment, fuelType },
  });

  return data.payload;
};
