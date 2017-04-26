import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router }            from '@angular/router';
import { IMyOptions, IMyDate, IMyDateModel } from 'mydatepicker';

import { BlogdataService } from '../services/blogdata.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() submitButton:string;
  @Input() post:Post;
  @Input() editMode:boolean;
  formvalid: boolean = true;
  newDate: Date;
  today = new Date();

 ngOnInit(){ }

 constructor (private blogService:BlogdataService, private router:Router){
    this.newDate = new Date();
 }

  onSubmit(){
    if (this.editMode){
        this.blogService.update(this.post).subscribe(() => this.Close());  
    }
    else{
      this.post.name = this.post.name.trim();
      this.post.text = this.post.text.trim();
      this.blogService.createPost(this.post.name, this.post.text, this.post.date);
      this.router.navigateByUrl('/home');
    }
  }

   Close(){
    this.router.navigateByUrl('/home');
  }

   private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd.mm.yyyy',
        alignSelectorRight: true,
        height:'28px',
        width: '170px',
        selectionTxtFontSize: '18px',
        disableUntil: { year: this.today.getFullYear(), month: this.today.getMonth()+1 , day: this.today.getDate()-1 } 
          };

    onDateChanged(event: IMyDateModel) {
         this.newDate = event.jsdate;
         this.post.date = this.newDate;
    }
}