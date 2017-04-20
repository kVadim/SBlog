import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogdataService } from "../../services/blogdata.service";
import { BlogdataServiceSpy } from "../../_testing-stubs/blogdata-spy.service";
import { ActivatedRoute, ActivatedRouteStub } from '../../_testing-stubs/router-stubs';
import { PostComponent } from './post-view.component';
import { Router }            from '@angular/router';
import { Post } from '../../shared/post';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let activatedRoute: ActivatedRouteStub;
  let expectedPost: Post;
  let post: DebugElement;
  let btnPublish: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {

    activatedRoute = new ActivatedRouteStub();
    activatedRoute.testParams = { id: 99999 };

    TestBed.configureTestingModule({
      declarations: [ PostComponent],
    })
    .overrideComponent(PostComponent, {
      set: {
        providers: [
          { provide: BlogdataService, useClass: BlogdataServiceSpy },
          { provide: ActivatedRoute, useValue: activatedRoute },
          { provide: Router,         useClass: RouterStub}
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
