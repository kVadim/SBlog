import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Post } from '../shared/post';
import { BlogdataService } from "../services/blogdata.service";
import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { SortByDatePipe } from '../shared/sort-by-date.pipe';


@Component({
  selector: 'app-postview-content',
  templateUrl: './postview-content.component.html',
  styleUrls: ['./postview-content.component.scss']
})
export class PostviewContentComponent implements OnInit {
  subscription: Subscription;
  posts: Observable<Post[]>;;
  allPosts: Post[];
  count: number;

  constructor(private blogService:BlogdataService, private router: Router){  }

  ngOnInit(){
     this.posts = this.blogService.posts;
     this.blogService.loadAll();
     this.posts.subscribe( value =>  this.allPosts=value )
  }

   deletePost(post: Post){
    this.blogService.deletePost(post.id);
  }

  openPost(post: Post){
    this.router.navigate(['/post', post.id]);
  }

}
