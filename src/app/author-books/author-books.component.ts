import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from '../models/author.model';
import { Book } from '../models/books.model'; 
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthorBooksServiceService } from './author-books-service.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css']
})

export class AuthorBooksComponent {
  authorId: number;
  author: Author;
  newBook: Book = { id: 0, title: '', pageCount: '', genre: '' };

  @ViewChild('bookForm') bookForm: NgForm;

  
  constructor(
    public dialogRef: MatDialogRef<AuthorBooksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { author: Author },
    private route: ActivatedRoute,
    private authorBooksService: AuthorBooksServiceService,
    
  ) {
    this.author = data.author;
  }



  // addBook() {
  //   console.log(this.newBook); 
  
  //   const newBook: Book = {
  //     id: 0, 
  //     title: this.newBook.title,
  //     pageCount: +this.newBook.pageCount,
  //     genre: this.newBook.genre
  //   };
  
  //   this.author.books.push(newBook);
  //   this.authorBooksService.updateAuthorInLocalStorage(this.author);
  //   this.dialogRef.close(this.data.author); 
  
  //   this.newBook.title = '';
  //   this.newBook.pageCount = 0;
  //   this.newBook.genre = '';
  // }


  addBook() {
    console.log(this.newBook);
  
    if (this.bookForm.invalid) {
      return; // Don't proceed if the form is invalid
    }
  
    const newBook: Book = {
      id: 0,
      title: this.newBook.title,
      pageCount: +this.newBook.pageCount,
      genre: this.newBook.genre
    };
  
    this.author.books.push(newBook);
    this.authorBooksService.updateAuthorInLocalStorage(this.author);
    this.dialogRef.close(this.data.author);
  
    this.newBook.title = '';
    this.newBook.pageCount = '';
    this.newBook.genre = '';
  }

  
  closeDialog() {
    this.dialogRef.close();
  }


}



