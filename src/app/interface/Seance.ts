
export interface Seance{
    id?: number;
    date: Date;
    dateEnd: Date;
    movieId: number;
    hallId: number;
    seatsTaken: number[];
}