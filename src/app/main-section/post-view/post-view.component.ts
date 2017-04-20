import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogdataService } from "../../services/blogdata.service";
import { Router }            from '@angular/router';

import { Post } from '../../shared/post';


@Component({
  moduleId: module.id,
  selector: 'app-post',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostComponent implements OnInit {
 post: Post;

  constructor( private blogService:BlogdataService,
              private route: ActivatedRoute,
              private router:Router)
              {}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.blogService.getPost(+params['id']))
        .subscribe( post => this.post = post );     
    }

  onEdit(post: Post){
    this.router.navigate(['/editpost', post.id]);
  }

  onClose(){
    this.router.navigateByUrl('/home');
  }
}
