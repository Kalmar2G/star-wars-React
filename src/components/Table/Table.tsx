import React from 'react';
import { SearchParams, TableInfo } from 'types';
import { columns } from './columns';
import styles from './Table.module.scss';
import { TextField } from '../form/TextField';

interface TableProps {
    data: TableInfo | undefined;
    isLoading: boolean;
    nameFilter: string;
    setNameFilter: React.Dispatch<React.SetStateAction<string>>;
    handleFetchData: ({ page, search }: SearchParams) => void;
}

export const Table = ({
  data, isLoading, setNameFilter, nameFilter, handleFetchData,
}: TableProps) => (
  <div>
    <table className={styles.Table}>
      <thead>
        <tr>
          {columns?.map(({
            columnName, key, width, hasFilter,
          }) => (
            <th key={key} style={{ width }}>
              <div className={hasFilter ? styles.ThFilter : ''}>
                {columnName}
                {hasFilter && (
                <TextField
                  setNameFilter={setNameFilter}
                  nameFilter={nameFilter}
                  handleFetchData={handleFetchData}
                />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      {!isLoading
          && (
          <tbody>
            {data?.rows?.map((row, index) => (
              <tr key={index}>
                <td>{row?.name}</td>
                <td className={styles.Hidden} />
                <td>{row?.sex}</td>
                <td>{row?.height}</td>
                <td>{row?.weight}</td>
                <td>{row?.eye}</td>
              </tr>
            ))}
          </tbody>
          )}
    </table>
    {!isLoading && data?.rows?.length === 0 && (
      <div className={styles.LoadWrapper}>
        <h3 className={styles.NoDataInfo}>
          no data
        </h3>
      </div>
    )}
    {isLoading && (
      <div className={styles.LoadWrapper}>
        <h3 className={styles.LoadInfo}>
          loading...
        </h3>
      </div>
    )}
  </div>
);
