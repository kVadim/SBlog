import { Post } from '../shared/post';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class BlogdataServiceSpy{
  posts: Observable<Post[]>                                           
  public _posts: BehaviorSubject<Post[]>;                                                                  
  public dataStore: {                                                 
    posts: Post[]
  };

  data = [
      {
        id: 1,
        name: `PostName1`,
        text: 'stub text 1',
        date: new Date("03.01.2017")
      },
      {
        id: 2,
        name: `PostName2`,
        text: 'stub text 2',
        date: new Date("03.02.2017")
      },
      {
        id:3, 
        name: `PostName3`,
        text: 'stub text 3',
        date: new Date("03.03.2017")
      },
      {
        id: 4,
        name: `PostName4`,
        text: 'stub text 4',        
        date: new Date("03.04.2017")
      },
      {
        id: 5,
        name: 'PostName5',
        text: 'stub text 5',
        date: new Date("03.05.2017")
      },
      {
        id:6, 
        name: 'PostName6',
        text: 'stub text 6',
        date: new Date("03.06.2017")
      },
      {
        id:7, 
        name: 'PostName7',
        text: 'stub text 7',
        date: new Date("03.07.2017")
      }
    ];
  testpost = new Post(777,'title777','Text777', new Date);

  constructor() {                                 
     this.dataStore = { posts: [] };
     this._posts = <BehaviorSubject<Post[]>>new BehaviorSubject([]);
     this.posts = this._posts.asObservable();
   }

  getPost = jasmine.createSpy('getPost').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.testpost))
  );

 loadAll(){
    this.dataStore.posts = this.data;     
    this._posts.next(Object.assign({}, this.dataStore).posts);
 }











  // loadAll = jasmine.createSpy('loadAll').and.callFake(
  //   () => Promise
  //     .resolve(true)
  //     .then(() => {
  //       this.dataStore.posts = this.data;     
  //       this._posts.next(Object.assign({}, this.dataStore).posts);
  //     })
  // );


//   saveHero = jasmine.createSpy('saveHero').and.callFake(
//     (hero: Hero) => Promise
//       .resolve(true)
//       .then(() => Object.assign(this.testHero, hero))
//   );
}