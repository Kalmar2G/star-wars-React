import { Response, TableInfo } from '../types';
import { formatDataFromBackend } from '../utils';

const backendURL = 'https://swapi.dev/api/people';

interface SearchParams {
  page?: string;
  search?:string;
}

const fetchData = async (params: SearchParams): Promise<TableInfo> => {
  const url = new URL(backendURL);
  url.search = new URLSearchParams(Object.entries(params)).toString();
  const res: Response = await fetch(url).then((data) => data.json()).catch(() => {
    throw new Error('fetch failed');
  });
  return formatDataFromBackend(res);
};

export const service = {
  fetchData,
};
