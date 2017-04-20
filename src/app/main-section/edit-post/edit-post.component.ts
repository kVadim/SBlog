import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BlogdataService } from "../../services/blogdata.service";

import { Post } from '../../shared/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
post: Post;
submitButton:string = 'Save Post';
editMode:boolean=true;

  constructor( private blogService:BlogdataService,
               private route: ActivatedRoute)
              {}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.blogService.getPost(+params['id']))
        .subscribe( post =>  this.post = post );   
    }
}
