import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

import { SidemenuComponent } from './sidemenu.component';
import { Post } from '../shared/post';
import { BlogdataService } from "../services/blogdata.service";
import { BlogdataServiceSpy } from "../testing/blogdata-spy.service";
import { SortByDatePipe } from '../shared/sort-by-date.pipe';
import { RouterLinkStubDirective }   from '../testing/router-stubs';

describe('SidemenuComponent', () => {
  let component: SidemenuComponent;
  let fixture: ComponentFixture<SidemenuComponent>;
  let title: DebugElement;
  let count: DebugElement;
  let latestFivePosts: DebugElement[];

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenuComponent, SortByDatePipe, RouterLinkStubDirective],
    })
    .overrideComponent(SidemenuComponent, {
      set: {
        providers: [
          { provide: BlogdataService, useClass: BlogdataServiceSpy },
        ]
      }
    })
    .compileComponents();
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    title = fixture.debugElement.query(By.css('h3'));
    count = fixture.debugElement.query(By.css('.counter'));
    latestFivePosts = fixture.debugElement.queryAll(By.css('.latest-posts'));
  });

  it('should display correct number of all Posts - 7', () => {
    fixture.detectChanges();
    expect(count.nativeElement.textContent).toContain('Count of Posts: 7');
  });

  it('should display five latest Posts in backward order: 7,6,5,4,3', () => {
    fixture.detectChanges();
    const expectedPostNames = ['PostName7', 'PostName6', 'PostName5', 'PostName4', 'PostName3'];
    const actualPostNames = [];
    latestFivePosts.forEach(function(item, i, array){
      var currentName = item.nativeElement.textContent.trim();      
      actualPostNames.push(currentName);
    })
    expect(actualPostNames).toEqual(expectedPostNames);
  });

  it('should display correct title - Latest Posts', () => {
    fixture.detectChanges();
    expect(title.nativeElement.textContent).toContain(component.title);
  });

});