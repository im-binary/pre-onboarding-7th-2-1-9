import { get } from './axiosInstance';

export const getAllCarList = async () => {
  const { data } = await get({
    url: '/cars',
  });

  return data.payload;
};

export const getSegmentCarList = async ({ segment }: { segment: string }) => {
  const { data } = await get({
    url: `/cars?segment=${segment}`,
    qsData: { segment },
  });

  return data.payload;
};
