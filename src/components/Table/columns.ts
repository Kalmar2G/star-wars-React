import { TableHeader } from 'types';

export const columns: TableHeader[] = [
  {
    key: 'name', hasFilter: true, columnName: 'Name', width: '35%',
  },
  {
    key: 'emptySpace', hasFilter: false, columnName: '', width: '1%',
  },
  {
    key: 'sex', hasFilter: false, columnName: 'Sex', width: '16%',
  },
  {
    key: 'height', hasFilter: false, columnName: 'Height', width: '16%',
  },
  {
    key: 'weight', hasFilter: false, columnName: 'Weight', width: '16%',
  },
  {
    key: 'eye', hasFilter: false, columnName: 'Eye', width: '16%',
  },
];
