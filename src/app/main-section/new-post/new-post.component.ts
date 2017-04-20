import { Component, OnInit} from '@angular/core';
import { BlogdataService } from '../../services/blogdata.service';
import { IMyOptions, IMyDate, IMyDateModel } from 'mydatepicker';
import { Post } from '../../shared/post';

@Component ({
  moduleId: module.id,
  selector: 'app-new-post',
  templateUrl: 'new-post.component.html',
  styleUrls: ['new-post.component.scss']
})
export class NewPostComponent implements OnInit{
  editMode:boolean=false;
  post: Post;
  submitButton:string = 'Publish';
  formvalid: boolean = true;
  date: string = "";
  day: number;
  month: number;
  year: number;

 ngOnInit(){  }

 constructor (private blogservice:BlogdataService){
    let d = new Date();
    this.day = d.getDate();
    this.month = d.getMonth()+1;
    this.year = d.getFullYear();
    this.date = `${this.day>9 ? this.day : '0'+ this.day}.${ this.month>9 ? this.month : '0'+this.month }.${this.year}.`;
    this.post = new Post (1, '', '', new Date);
 }
}
