import { Book } from "./books.model";

export interface Author {
    id: number,
    lastName: string;
    firstName: string;
    middleName?: string;
    birthDate: Date;
    books: Book[];
}
