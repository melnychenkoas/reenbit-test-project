import { Pipe, PipeTransform } from '@angular/core';
import { Message } from 'src/app/pages/contact';

@Pipe ({
name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform{
  transform(value: Message[]): any {
    const sortedValues = value.sort((a, b) => {
      var nameA = a.creationDate; 
      var nameB = b.creationDate;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sortedValues;
  }
}