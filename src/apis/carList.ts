import { get } from './axiosInstance';

export const getAllCarList = async () => {
  const { data } = await get({
    url: '/cars',
  });

  return data.payload;
};

export const getCategoryCarList = async ({ segment }: { segment: string }) => {
  const { data } = await get({
    url: `/cars`,
    qsData: { segment },
  });

  return data.payload;
};
