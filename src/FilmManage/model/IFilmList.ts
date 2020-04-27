import { IPerson } from "./IPerson";

export interface IFilmList {
	title?: string;
	timeRemained?:number;
	chechStatue?: boolean;
    published?: boolean;
    person?:IPerson;
}
