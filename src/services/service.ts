import { formatDataFromBackend } from 'utils';
import { Response, SearchParams, TableInfo } from 'types';

const backendURL = 'https://swapi.dev/api/people';

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
