// re-export for tester convenience
export { Post }        from '../shared/post';
export { BlogdataService } from '../services/blogdata.service';

import { Injectable } from '@angular/core';
import { Post }        from '../shared/post';
import { BlogdataService } from '../services/blogdata.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// export var items:Post[] = [
//       {
//         id: 4,
//         name: `PostName4`,
//         text: 'text4',
//         date: new Date("03.04.2017")
//       },
//       {
//         id: 2,
//         name: `PostName2`,
//          text: 'text2',
//         date: new Date("03.02.2017")
//       },
//       {
//         id:1, 
//         name: `PostName1`,
//          text: 'text1',
//         date: new Date("03.01.2017")
//       },
//       {
//         id: 3,
//         name: `PostName3`,
//          text: 'text3',
//         date: new Date("03.03.2017")
//       }
// ];

// @Injectable()
// export class FakeBlogdataService implements BlogdataService {

//   posts: Observable<Post[]>
//   _posts: BehaviorSubject<Post[]>;  
//   dataStore: { posts: Post[] };

// constructor() {
//      this.dataStore = { posts: [] };
//      this._posts = <BehaviorSubject<Post[]>>new BehaviorSubject([]);
//      this.posts = this._posts.asObservable();
//    }

// loadAll() {
//       this.http.get(this.ItemsUrl)
//       .map(response => response.json().data as Post[])
//       .subscribe(data => {
//       this.dataStore.posts = data;     
//       this._posts.next(Object.assign({}, this.dataStore).posts);
//     }, error => console.log('Could not load posts.'));
//   }
                  
//   getPost(id: number): Observable<Post> {
//     const url = `${this.ItemsUrl}/${id}`;
//     return this.http.get(url)
//       .map(response => response.json().data as Post)
//       .catch(this.handleError);
//   }

//  deletePost(id: number) {
//    const url = `${this.ItemsUrl}/${id}`;
//     this.http.delete(url, {headers: this.headers}).subscribe(response => {
//       this.dataStore.posts.forEach((t, i) => {
//         if (t.id === id) { this.dataStore.posts.splice(i, 1); }
//       });

//       this._posts.next(Object.assign({}, this.dataStore).posts);
//     }, error => console.log('Could not delete post.'));
//   }

//   createPost(name: string, text:string, date:Date) {
//     this.http.post(this.ItemsUrl, JSON.stringify({name: name, text:text, date:date}), {headers: this.headers})
//       .map(response => response.json().data).subscribe(data => {
//         this.dataStore.posts.push(data);
//         this._posts.next(Object.assign({}, this.dataStore).posts);
//       }, error => console.log('Could not create post.'));
//   }
 
//    update(hero: Post): Observable<Post> {
//     const url = `${this.ItemsUrl}/${hero.id}`;
//     return this.http
//       .put(url, JSON.stringify(hero), {headers: this.headers})
//       .map(() => hero)
//       .catch(this.handleError);
//   }

//    handleError(error: any): Observable<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Observable.throw(error.message || error);
//   }


//   posts = posts.map(h => h.clone());
//   lastPromise: Promise<any>;  // remember so we can spy on promise calls

//   getHero(id: number | string) {
//     if (typeof id === 'string') {
//       id = parseInt(id as string, 10);
//     }
//     let hero = this.heroes.find(h => h.id === id);
//     return this.lastPromise = Promise.resolve(hero);
//   }

//   getHeroes() {
//     return this.lastPromise = Promise.resolve<Hero[]>(this.heroes);
//   }

//   updateHero(hero: Hero): Promise<Hero> {
//     return this.lastPromise = this.getHero(hero.id).then(h => {
//       return h ?
//         Object.assign(h, hero) :
//         Promise.reject(`Hero ${hero.id} not found`) as any as Promise<Hero>;
//     });
//   }
}