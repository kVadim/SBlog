import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
// import { DatePickerModule } from 'ng2-datepicker';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NewPostFormComponent } from './new-post-form/new-post-form.component';
import { PostComponent } from './post/post.component';
import { BlogdataService } from './services/blogdata.service';
import { PostviewComponent } from './postview/postview.component';
import { PostviewContentComponent } from './postview-content/postview-content.component';
import { PostFormComponent } from './post-form/post-form.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { SortByDatePipe } from './shared/sort-by-date.pipe';
import { TopHeaderComponent } from './top-header/top-header.component';


@NgModule({
  declarations: [
    AppComponent, 
    SidemenuComponent,
    PostviewComponent, 
    PostviewContentComponent,
    NewPostFormComponent, 
    PostComponent, 
    PostFormComponent, 
    EditPostComponent, 
    SortByDatePipe, 
    TopHeaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // DatePickerModule,
    MyDatePickerModule
  ],
  providers: [BlogdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }