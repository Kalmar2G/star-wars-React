import { Person } from './Person';

export interface Response {
    count: number;
    next: string;
    previous: string;
    results: Person[];
}
