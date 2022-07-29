import { Response, TableInfo } from '../types';

export const formatDataFromBackend = (data: Response): TableInfo => {
  const rows = data?.results?.map((row) => ({
    name: row?.name,
    sex: row?.gender,
    height: row?.height,
    weight: row?.mass,
    eye: row?.eye_color,
  }));
  return {
    rows,
    total: data?.count,
  };
};
