import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorServiceService } from './author-service.service';
import { Author } from '../models/author.model';
import { MatDialog } from '@angular/material/dialog';
import { AuthorBooksComponent } from '../author-books/author-books.component';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  submitted: boolean = false;

  authors: Author[] = [];
  genres: string[] = [];
  authorForm: FormGroup | any; 
  isEditing: boolean = false;
  selectedAuthor: Author | null = null;
  updatedAuthor: Author | undefined; 
  searchTitle: string = '';

  sortDirection: '' | 'asc' | 'desc' = '';

  sortKey: string = 'lastName';
  iconSortDirection: 'asc' | 'desc' = 'asc';


  constructor(
    private authorService: AuthorServiceService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog 
  ) {
    this.authorForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      middleName: [''],
      birthDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authors = this.authorService.getAuthorsFromLocalStorage();
  }


  saveAuthor() {
    this.submitted = true;
    if (this.authorForm.valid) {
      const authorData = this.authorForm.value;
      if (this.isEditing && this.selectedAuthor) {
        this.selectedAuthor.lastName = authorData.lastName;
        this.selectedAuthor.firstName = authorData.firstName;
        this.selectedAuthor.middleName = authorData.middleName;
        this.selectedAuthor.birthDate = authorData.birthDate;
        this.authorService.updateAuthorInLocalStorage(this.selectedAuthor);
      } else {
        const newAuthor: Author = {
          id: new Date().getTime(), // Generate a unique ID
          ...authorData,
          books: [] // Initialize with empty books array
        };
        this.authorService.addAuthorToLocalStorage(newAuthor);
      }
      this.resetForm();
      this.authors = this.authorService.getAuthorsFromLocalStorage(); // Оновити список авторів
    }
  }

  
  editAuthor(author: Author) {
    this.selectedAuthor = author;
    this.isEditing = true;
    this.authorForm.patchValue({
      lastName: author.lastName,
      firstName: author.firstName,
      middleName: author.middleName,
      birthDate: author.birthDate
    });
  }

  deleteAuthor(author: Author) {
    this.authorService.deleteAuthorFromLocalStorage(author.id);
    this.loadAuthors();
  }

  cancelEdit() {
    this.resetForm();
  }


  resetForm() {
    this.authorForm.reset();
    this.selectedAuthor = null;
    this.isEditing = false;
  }
  
  openAuthorBooksDialog(author: Author): void {
    const dialogRef = this.dialog.open(AuthorBooksComponent, {
      width: '400px',
      data: { author }
    });

    dialogRef.afterClosed().subscribe(updatedAuthor => {
      if (updatedAuthor) {
        const index = this.authors.findIndex(a => a.id === updatedAuthor.id);
        if (index !== -1) {
          this.authors[index] = updatedAuthor;
        }
      }
    });
  }





  // searching book
  filterBooksByTitle(books: Book[], searchTerm: string): Book[] {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return books.filter(book =>
      book.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }


  toggleSortDirection(field: string) {
    if (this.sortKey === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
      this.sortKey = field;
    }
  }

}
