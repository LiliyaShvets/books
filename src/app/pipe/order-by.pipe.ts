import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})



export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string, direction: 'asc' | 'desc' | '' = ''): any[] {
    if (!array || !field || !direction) {
      return array;
    }

    const isAsc = direction === 'asc';
    
    if (field === 'books.length') {
      return array.sort((a, b) => (a.books.length - b.books.length) * (isAsc ? 1 : -1));
    }

    return array.sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];
      return (aValue < bValue ? -1 : 1) * (isAsc ? 1 : -1);
    });
  }
}