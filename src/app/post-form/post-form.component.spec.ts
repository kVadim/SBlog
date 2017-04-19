// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { PostFormComponent } from './post-form.component';
// import { EditPostComponent } from '../edit-post/edit-post.component'
// import { By }           from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { Post } from '../shared/post';
// import { NO_ERRORS_SCHEMA }          from '@angular/core';
// import { Router }            from '@angular/router';
// import { BlogdataService } from "../services/blogdata.service";
// import { BlogdataServiceSpy } from "../testing/blogdata-spy.service";
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, ActivatedRouteStub } from '../testing/router-stubs';
// import { IMyOptions, IMyDate, IMyDateModel } from 'mydatepicker';

// class RouterStub {
//   navigateByUrl(url: string) { return url; }
// }

// describe('PostFormComponent', () => {
//   let activatedRoute: ActivatedRouteStub;
//   let component: EditPostComponent;
//   let fixture: ComponentFixture<EditPostComponent>;
//   let expectedPost: Post;
//   let postEl: DebugElement;
//   let el: HTMLElement;


// beforeEach(async(() => {

//     activatedRoute = new ActivatedRouteStub();
//     activatedRoute.testParams = { id: 99999 };

//     TestBed.configureTestingModule({
//       imports: [ FormsModule ],
//       declarations: [ EditPostComponent, PostFormComponent],
//       schemas:  [ NO_ERRORS_SCHEMA ]
//     })
//     .overrideComponent(EditPostComponent, {
//       set: {
//         providers: [
//           { provide: BlogdataService, useClass: BlogdataServiceSpy },
//           { provide: ActivatedRoute, useValue: activatedRoute },
//           { provide: Router, useValue: RouterStub }
//         ]
//       }
//     })
//     .compileComponents();
//   }));


//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditPostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     // component.post = new Post (777, 'P1', 'T1', new Date);
//     postEl  = fixture.debugElement.query(By.css('form'));
//     el=postEl.nativeElement;
//     // expectedPost =  new Post (777, 'P1', 'T1', new Date);
//     fixture.detectChanges();
//   });

//   it('S', () => {
//     fixture.detectChanges();
//     expect(el.textContent).toContain(component.submitButton);
//   });
// });

 

  


  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports:      [ FormsModule ],
  //     declarations: [ PostFormComponent, EditPostComponent ],
  //     providers: [ BlogdataService, {provide: Router, useValue: RouterStub }],
  //     schemas:  [ NO_ERRORS_SCHEMA ]
  //   })
  //   .compileComponents();
  // }));

