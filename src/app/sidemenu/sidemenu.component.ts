import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Post } from '../shared/post';
import { BlogdataService } from "../services/blogdata.service";
import { SortByDatePipe } from '../shared/sort-by-date.pipe';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent  implements OnInit {
  title = 'Latest Posts';
  subscription: Subscription;
  posts: Observable<Post[]>;;
  latestPosts: Post[];
  count: number;

  constructor(private blogService:BlogdataService){  }

  ngOnInit(){ 
     this.posts = this.blogService.posts;
     this.blogService.loadAll();
     this.posts.subscribe((value) => { this.count = value.length;  
                                       this.latestPosts=value;
                                      })
   }
}
