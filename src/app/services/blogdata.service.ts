import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Post } from '../shared/post';

@Injectable()
export class BlogdataService {
  posts: Observable<Post[]>                                           //shoud be private but public for fake service
  public _posts: BehaviorSubject<Post[]>;                             //shoud be private but public for fake service
  public headers = new Headers({'Content-Type': 'application/json'}); //shoud be private but public for fake service
  public ItemsUrl = 'api/Items';                                      //shoud be private but public for fake service
  public dataStore: {                                                 //shoud be private but public for fake service
    posts: Post[]
  };
  
  constructor(public http: Http) {                                    //shoud be private but public for fake service
     this.dataStore = { posts: [] };
     this._posts = <BehaviorSubject<Post[]>>new BehaviorSubject([]);
     this.posts = this._posts.asObservable();
   }

  loadAll() {
      this.http.get(this.ItemsUrl)
      .map(response => response.json().data as Post[])
      .subscribe(data => {
      this.dataStore.posts = data;     
      this._posts.next(Object.assign({}, this.dataStore).posts);
    }, error => console.log('Could not load posts.'));
  }
                  
  getPost(id: number): Observable<Post> {
    const url = `${this.ItemsUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Post)
      .catch(this.handleError);
  }

 deletePost(id: number) {
   const url = `${this.ItemsUrl}/${id}`;
    this.http.delete(url, {headers: this.headers}).subscribe(response => {
      this.dataStore.posts.forEach((t, i) => {
        if (t.id === id) { this.dataStore.posts.splice(i, 1); }
      });

      this._posts.next(Object.assign({}, this.dataStore).posts);
    }, error => console.log('Could not delete post.'));
  }

  createPost(name: string, text:string, date:Date) {
    this.http.post(this.ItemsUrl, JSON.stringify({name: name, text:text, date:date}), {headers: this.headers})
      .map(response => response.json().data).subscribe(data => {
        this.dataStore.posts.push(data);
        this._posts.next(Object.assign({}, this.dataStore).posts);
      }, error => console.log('Could not create post.'));
  }
 
   update(hero: Post): Observable<Post> {
    const url = `${this.ItemsUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .map(() => hero)
      .catch(this.handleError);
  }

   public handleError(error: any): Observable<any> {           //shoud be private but public for fake service
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

}
