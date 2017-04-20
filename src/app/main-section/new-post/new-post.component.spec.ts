import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFormComponent} from '../../post-form/post-form.component';
import { NewPostComponent } from './new-post.component';
import { BlogdataService } from "../../services/blogdata.service";
import { Http } from '@angular/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { NO_ERRORS_SCHEMA }          from '@angular/core';

describe('NewPostComponent', () => {
  let component: NewPostComponent;
  let fixture: ComponentFixture<NewPostComponent>;
  let blogService: BlogdataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostComponent ],
       providers: [ BlogdataService, Http, InMemoryDbService],
       schemas:  [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ NewPostComponent ],
       providers: [ BlogdataService],
       schemas:  [ NO_ERRORS_SCHEMA ]
    })
    fixture = TestBed.createComponent(NewPostComponent);
    component = fixture.componentInstance;
    blogService = fixture.debugElement.injector.get(BlogdataService);
    fixture.detectChanges();
  });

  // it('true is true', () => expect(true).toBe(true));
});

