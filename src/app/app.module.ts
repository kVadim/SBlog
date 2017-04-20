import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NewPostComponent } from './main-section/new-post/new-post.component';
import { PostComponent } from './main-section/post-view/post-view.component';
import { BlogdataService } from './services/blogdata.service';
import { MainSectionComponent } from './main-section/main-section.component';
import { PostviewContentComponent } from './postview-content/postview-content.component';
import { PostFormComponent } from './post-form/post-form.component';
import { EditPostComponent } from './main-section/edit-post/edit-post.component';
import { SortByDatePipe } from './shared/sort-by-date.pipe';
import { TopHeaderComponent } from './top-header/top-header.component';


@NgModule({
  declarations: [
    AppComponent, 
    SidemenuComponent,
    MainSectionComponent, 
    PostviewContentComponent,
    NewPostComponent, 
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
    MyDatePickerModule
  ],
  providers: [BlogdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }