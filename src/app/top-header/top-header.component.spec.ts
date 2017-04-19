import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopHeaderComponent } from './top-header.component';
import { DebugElement }    from '@angular/core';
import { By }              from '@angular/platform-browser';

describe('TopHeaderComponent', () => {
  let component: TopHeaderComponent;
  let fixture: ComponentFixture<TopHeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title - SimpleBlog ', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(component.blogTitle);
  });

  it('should display a different test title', () => {
    component.blogTitle = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });


});