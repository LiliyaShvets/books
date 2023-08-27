import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';


import { AuthorBooksModule } from 'src/app/author-books/author-books/author-books.module';



@NgModule({
  declarations: [
    AuthorBooksModule
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class AuthorModule { }
