import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { GenresComponent } from './genres/genres.component';


import { ReactiveFormsModule } from '@angular/forms';
import { AuthorBooksComponent } from './author-books/author-books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms'
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterByTitlePipe } from './pipe/filter-by-title.pipe';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatRadioModule } from '@angular/material/radio';
import { OrderByPipe } from './pipe/order-by.pipe';

// import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    GenresComponent,
    AuthorBooksComponent,
    FilterByTitlePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,  
    MatButtonModule,
    MatIconModule,
    MatDialogModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

    MatRadioModule
  ],
  exports: [
    OrderByPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
