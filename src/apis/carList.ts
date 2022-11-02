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

export const getSmallSizeCarList = async ({ segment }: { segment: string }) => {
  const { data } = await get({
    url: `/cars`,
    qsData: { segment },
  });

  return data.payload;
};

export const getMidSizeCarList = async ({ segment }: { segment: string }) => {
  const { data } = await get({
    url: `/cars`,
    qsData: { segment },
  });

  return data.payload;
};

export const getFullSizeCarList = async ({ segment }: { segment: string }) => {
  const { data } = await get({
    url: `/cars`,
    qsData: { segment },
  });

  return data.payload;
};

export const getSuvCarList = async ({ segment }: { segment: string }) => {
  const { data } = await get({
    url: `/cars`,
    qsData: { segment },
  });

  return data.payload;
};
