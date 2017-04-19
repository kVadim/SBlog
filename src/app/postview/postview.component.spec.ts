import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostviewComponent } from './postview.component';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective }   from '../testing/router-stubs';
// import { RouterLinkActiveStubDirective }   from '../testing/router-stubs';
import { RouterOutletStubComponent } from '../testing/router-stubs';
import { DebugElement }    from '@angular/core';
import { NO_ERRORS_SCHEMA }          from '@angular/core';

describe('PostviewComponent', () => {
  let component: PostviewComponent;
  let fixture: ComponentFixture<PostviewComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];
  let btns: DebugElement[];
  let elHome: HTMLElement;
  let elNewPost: HTMLElement;
 

beforeEach( async(() => {
  TestBed.configureTestingModule({
    declarations: [
      PostviewComponent, 
      RouterLinkStubDirective, 
      // RouterLinkActiveStubDirective,   // created by me
      RouterOutletStubComponent
    ],
    schemas:  [ NO_ERRORS_SCHEMA ]
  })

  .compileComponents()
  .then(() => {
    fixture = TestBed.createComponent(PostviewComponent);
    component = fixture.componentInstance;
  });
}));

beforeEach(() => {
  // trigger initial data binding
  fixture.detectChanges();

  // find DebugElements with an attached RouterLinkStubDirective
  linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkStubDirective));

  // get the attached link directive instances using the DebugElement injectors
  links = linkDes
    .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

  btns  = fixture.debugElement.queryAll(By.css('.toolbar'));
  elHome = btns[0].nativeElement;
  elNewPost = btns[1].nativeElement;

});

  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(2, 'should have 2 links');
    expect(links[0].linkParams).toBe('/home', '1st link should go to home');
    expect(links[1].linkParams).toBe('/newpost', '2nd link should go to newpost');
  });

  it('can click New Post link in template', () => {
    const newpostsLinkDe = linkDes[1];
    const newpostsLink = links[1];

    expect(newpostsLink.navigatedTo).toBeNull('link should not have navigated yet');
    newpostsLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(newpostsLink.navigatedTo).toBe('/newpost');
  });

  it('should display HOME button', () => {
    fixture.detectChanges(); 
    const content = elHome.textContent;
    expect(content).toContain('Home');
  });

  it('should display New Post button', () => {
    fixture.detectChanges(); 
    const content = elNewPost.textContent;
    expect(content).toContain('New Post');
  });

});


