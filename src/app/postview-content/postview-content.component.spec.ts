import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';
import { Router }            from '@angular/router';

import { PostviewContentComponent } from './postview-content.component';
import { Post } from '../shared/post';
import { BlogdataService } from "../services/blogdata.service";
import { BlogdataServiceSpy } from "../testing/blogdata-spy.service";
import { SortByDatePipe } from '../shared/sort-by-date.pipe';
import { RouterLinkStubDirective }   from '../testing/router-stubs';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('PostviewContentComponent', () => {
  let component: PostviewContentComponent;
  let fixture: ComponentFixture<PostviewContentComponent>; 
  let btnReadMore: DebugElement;
  let btnDelete: DebugElement;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostviewContentComponent, SortByDatePipe, RouterLinkStubDirective],
    })
    .overrideComponent(PostviewContentComponent, {
      set: {
        providers: [
          { provide: BlogdataService, useClass: BlogdataServiceSpy },
          { provide: Router, useValue: RouterStub }
        ]
      }
    })
    .compileComponents();
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(PostviewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    btnReadMore  = fixture.debugElement.query(By.css('.read'));    
    btnDelete  = fixture.debugElement.query(By.css('.delete'));
    
  });

  it('should display all Posts in backward order: 7-1', () => {    // incorrect check !!! 
    fixture.detectChanges();
    const expectedPosts = [
      {
        id: 1,
        name: `PostName1`,
        text: 'stub text 1',
        date: new Date("03.01.2017")
      },
      {
        id: 2,
        name: `PostName2`,
        text: 'stub text 2',
        date: new Date("03.02.2017")
      },
      {
        id:3, 
        name: `PostName3`,
        text: 'stub text 3',
        date: new Date("03.03.2017")
      },
      {
        id: 4,
        name: `PostName4`,
        text: 'stub text 4',        
        date: new Date("03.04.2017")
      },
      {
        id: 5,
        name: 'PostName5',
        text: 'stub text 5',
        date: new Date("03.05.2017")
      },
      {
        id:6, 
        name: 'PostName6',
        text: 'stub text 6',
        date: new Date("03.06.2017")
      },
      {
        id:7, 
        name: 'PostName7',
        text: 'stub text 7',
        date: new Date("03.07.2017")
      }
    ];
    expect(component.allPosts).toEqual(expectedPosts.reverse());
  });

  it('should display Read More button', () => {
    fixture.detectChanges(); 
    expect(btnReadMore.nativeElement.textContent).toContain('Read more');
  });

    it('should display DELETE button', () => {
    fixture.detectChanges(); 
    expect(btnDelete.nativeElement.textContent).toContain('Delete');
  });

});








  // it('should display post name', () => {
  //   fixture.detectChanges(); 
  //   const expectedName = expectedPost.name;
  //   expect(postEl.nativeElement.textContent).toContain(expectedName);
  // });

 // UserService from the root injector
    // userService = TestBed.get(BlogdataService);

    // postEl  = fixture.debugElement.query(By.css('.post'));
    // expectedPost =  new Post(777, 'P1', 'T1', new Date);