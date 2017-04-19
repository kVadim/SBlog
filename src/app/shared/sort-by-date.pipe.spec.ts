import { SortByDatePipe } from './sort-by-date.pipe';
import { Post } from '../shared/post';

let random:Post[] = [
      {
        id: 4,
        name: `PostName4`,
        text: 'text4',
        date: new Date("03.04.2017")
      },
      {
        id: 2,
        name: `PostName2`,
         text: 'text2',
        date: new Date("03.02.2017")
      },
      {
        id:1, 
        name: `PostName1`,
         text: 'text1',
        date: new Date("03.01.2017")
      },
      {
        id: 3,
        name: `PostName3`,
         text: 'text3',
        date: new Date("03.03.2017")
      }
];

let sorted:Post[] = [
      {
        id: 4,
        name: `PostName4`,
        text: 'text4',
        date: new Date("03.04.2017")
      },
      {
        id: 3,
        name: `PostName3`,
         text: 'text3',
        date: new Date("03.03.2017")
      },
      {
        id:2, 
        name: `PostName2`,
         text: 'text2',
        date: new Date("03.02.2017")
      },
      {
        id: 1,
        name: `PostName1`,
         text: 'text1',
        date: new Date("03.01.2017")
      }
];


describe('SortByDatePipe', () => {

let pipe = new SortByDatePipe();

  it('posts are sorted by date', () => {
    expect(pipe.transform(random)).toEqual(sorted);
  });
});




