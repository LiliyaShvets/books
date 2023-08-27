import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';
import { AuthorServiceService } from '../authors/author-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorBooksServiceService {
  constructor(private authorService: AuthorServiceService) {}

  updateAuthorInLocalStorage(author: Author) {
    const authors = this.authorService.getAuthorsFromLocalStorage(); // Виклик методу з AuthorService
    const index = authors.findIndex(a => a.id === author.id);
    if (index !== -1) {
      authors[index] = author;
      this.authorService.updateAuthorsInLocalStorage(authors); // Виклик методу з AuthorService
    }
  }

}
