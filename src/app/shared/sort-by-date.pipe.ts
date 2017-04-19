import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../shared/post';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

 transform(array: Array<Post>): Array<Post> {

  if(!array || array === undefined || array.length === 0) return null;

    array.sort((a: any, b: any) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    array.reverse();
    return array;
  }
}