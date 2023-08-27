import { Injectable } from '@angular/core';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  private localStorageKey = 'authors';

  private defaultAuthors: Author[] = [
    {
      id: 1,
      lastName: 'Франко',
      firstName: 'Іван',
      middleName: 'Якович',
      birthDate: new Date('1856-08-27'),
      books: [{ 
        id: 34,
        title: 'Захар Беркут',
        pageCount: 365,
        genre: 'Історичний епос'
      }, { 
        id: 31,
        title: 'Украдене щастя',
        pageCount: 265,
        genre: 'Драма'
      }]
    },
    {
      id: 2,
      lastName: 'Шевченко',
      firstName: 'Тарас',
      middleName: 'Григорович',
      birthDate: new Date('1814-03-09'),
      books: [{ 
        id: 24,
        title: 'Кобзар',
        pageCount: 565,
        genre: 'Поезія'
      }, { 
        id: 21,
        title: 'Думка',
        pageCount: 165,
        genre: 'Поезія'
      }]
    },
    {
      id: 2,
      lastName: 'Коцюбинський',
      firstName: 'Михайло',
      middleName: 'Михайлович',
      birthDate: new Date('1864-09-17'),
      books: [{ 
        id: 264,
        title: 'Тіні запутих предків',
        pageCount: 565,
        genre: 'Фікшн'
      }, {
        id: 621,
        title: 'Intermezzo',
        pageCount: 165,
        genre: 'Фікшн'
      }, {
        id: 641,
        title: 'Дорогою ціною',
        pageCount: 462,
        genre: 'Історичний жанр'
      }]
    },
    {
      id: 2,
      lastName: 'Мирний',
      firstName: 'Панас',
      middleName: 'Якович',
      birthDate: new Date('1849-05-13'),
      books: [ {
        id: 141,
        title: 'Лихі Люди',
        pageCount: 262,
        genre: 'Фікшн'
      }]
    }
    // Add more default authors here
  ];

  public getAuthorsFromLocalStorage(): Author[] {
    const authorsData = localStorage.getItem(this.localStorageKey);
    return authorsData ? JSON.parse(authorsData) : this.defaultAuthors;
  }

  private saveAuthorsToLocalStorage(authors: Author[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(authors));
  }

  getAuthors(): Author[] {
    return this.getAuthorsFromLocalStorage();
  }

  addAuthor(author: Author): void {
    const authors = this.getAuthorsFromLocalStorage();
    authors.push(author);
    this.saveAuthorsToLocalStorage(authors);
  }

  updateAuthor(updatedAuthor: Author): void {
    const authors = this.getAuthorsFromLocalStorage();
    const index = authors.findIndex(author => author.id === updatedAuthor.id);
    if (index !== -1) {
      authors[index] = updatedAuthor;
      this.saveAuthorsToLocalStorage(authors);
    }
  }

  deleteAuthor(authorId: number): void {
    const authors = this.getAuthorsFromLocalStorage();
    const index = authors.findIndex(author => author.id === authorId);
    if (index !== -1) {
      authors.splice(index, 1);
      this.saveAuthorsToLocalStorage(authors);
    }
  }


  addAuthorToLocalStorage(author: Author): void {
    const authors = this.getAuthorsFromLocalStorage();
    authors.push(author);
    this.saveAuthorsToLocalStorage(authors);
  }

  updateAuthorInLocalStorage(updatedAuthor: Author): void {
    const authors = this.getAuthorsFromLocalStorage();
    const index = authors.findIndex(author => author.id === updatedAuthor.id);
    if (index !== -1) {
      authors[index] = updatedAuthor;
      this.saveAuthorsToLocalStorage(authors);
    }
  }

    updateAuthorsInLocalStorage(authors: Author[]) {
    localStorage.setItem('authors', JSON.stringify(authors));
  }

  deleteAuthorFromLocalStorage(authorId: number): void {
    const authors = this.getAuthorsFromLocalStorage();
    const index = authors.findIndex(author => author.id === authorId);
    if (index !== -1) {
      authors.splice(index, 1);
      this.saveAuthorsToLocalStorage(authors);
    }
  }

  getAuthorById(authorId: number): Author | undefined {
    const authors = this.getAuthorsFromLocalStorage();
    return authors.find(author => author.id === authorId);
  }

}
