import React from 'react';
import { TableInfo } from 'types';
import { columns } from './columns';
import styles from './Table.module.scss';

interface TableProps {
    data: TableInfo | undefined;
    isLoading: boolean;
}

export const Table = ({ data, isLoading }: TableProps) => (
  <div>
    <table className={styles.Table}>
      <thead>
        <tr>
          {columns?.map(({ columnName, key, width }) => (
            <th key={key} style={{ width }}>{columnName}</th>
          ))}
        </tr>
      </thead>
      {!isLoading
          && (
          <tbody>
            {data?.rows?.map((row) => (
              <tr>
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
    {isLoading && (
      <div className={styles.LoadWrapper}>
        <h3 className={styles.LoadInfo}>
          loading...
        </h3>
      </div>
    )}
  </div>
);
