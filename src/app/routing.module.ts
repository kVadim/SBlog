import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewPostFormComponent }   from './new-post-form/new-post-form.component';
import { PostComponent }      from './post/post.component';
import { EditPostComponent }      from './edit-post/edit-post.component';
import { PostviewContentComponent }  from './postview-content/postview-content.component';  // rename to Home

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: PostviewContentComponent },
  { path: 'newpost',  component: NewPostFormComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'editpost/:id', component: EditPostComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}