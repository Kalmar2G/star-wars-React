interface TableRow {
    name: string;
    sex: string;
    height: string;
    weight: string;
    eye: string;
}
export interface TableInfo {
    rows: TableRow[];
    total: number;
}
