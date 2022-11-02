import { get } from './axiosInstance';

export const getCarDetail = async ({
  fuelType,
  segment,
}: {
  fuelType: string;
  segment: string;
}) => {
  const { data } = await get({
    url: `/cars`,
    qsData: { segment, fuelType },
  });

  return data.payload[0];
};
