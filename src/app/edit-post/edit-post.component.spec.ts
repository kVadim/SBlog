// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA }          from '@angular/core';

// import { EditPostComponent } from './edit-post.component';
// import { PostFormComponent } from '../post-form/post-form.component';
// import { BlogdataService } from "../services/blogdata.service";
// import { BlogdataServiceSpy } from "../testing/blogdata-spy.service";
// import { ActivatedRoute, ActivatedRouteStub } from '../testing/router-stubs';
// import { Post } from '../shared/post';
// import { DebugElement } from '@angular/core';
// import { By }           from '@angular/platform-browser';

// describe('EditPostComponent', () => {
//   let activatedRoute: ActivatedRouteStub;
//   let component: EditPostComponent;
//   let fixture: ComponentFixture<EditPostComponent>;
//   let expectedPost: Post;
//   let post: DebugElement;
//   let btnPublish: DebugElement;
//   let el: HTMLElement;


//   beforeEach(async(() => {

//     activatedRoute = new ActivatedRouteStub();
//     activatedRoute.testParams = { id: 99999 };

//     TestBed.configureTestingModule({
//       declarations: [ EditPostComponent, PostFormComponent],
//       // providers: [        { provide: Router,         useClass: RouterStub}     ],
//        schemas:  [ NO_ERRORS_SCHEMA ]
//     })
//      // Override component's own provider
//     .overrideComponent(EditPostComponent, {
//       set: {
//         providers: [
//           { provide: BlogdataService, useClass: BlogdataServiceSpy },
//           { provide: ActivatedRoute, useValue: activatedRoute },
//         ]
//       }
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditPostComponent);
//     component = fixture.componentInstance;
//     component.submitButton = "Save Post";
//     expectedPost =  new Post(777,'title777','Text777', new Date);
//     component.post = expectedPost;
//     component.editMode = true;

//     btnPublish  = fixture.debugElement.query(By.css('.publish'));
//     el = btnPublish.nativeElement;

//     post  = fixture.debugElement.query(By.css('.editpost'));
//     fixture.detectChanges();
//   });


//   it('submit Button shoud display Save Post', () => {
//     fixture.detectChanges(); 
//     const expectedName = "Save Post";
//     expect(el).toContain(expectedName);
//   });

//   it('should display post name', () => {
//     fixture.detectChanges(); 
//     const expectedName = expectedPost.name;
//     expect(post).toContain(expectedName);
//   });


// });





