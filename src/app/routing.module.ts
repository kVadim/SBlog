import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPostComponent }   from './main-section/new-post/new-post.component';
import { PostComponent }      from './main-section/post-view/post-view.component';
import { EditPostComponent }      from './main-section/edit-post/edit-post.component';
import { PostviewContentComponent }  from './postview-content/postview-content.component'; 
import { SidemenuComponent }  from './sidemenu/sidemenu.component';  
 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: PostviewContentComponent },
  { path: 'newpost',  component: NewPostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'editpost/:id', component: EditPostComponent }, 
  { path: 'sidemenu', component: SidemenuComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}