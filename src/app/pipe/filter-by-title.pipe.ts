import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/books.model';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(books: Book[], searchTitle: string): Book[] {
    if (!searchTitle) {
      return books;
    }

    return books.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
  }

}
