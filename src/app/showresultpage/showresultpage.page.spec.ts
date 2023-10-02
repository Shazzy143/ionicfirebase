import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowresultpagePage } from './showresultpage.page';

describe('ShowresultpagePage', () => {
  let component: ShowresultpagePage;
  let fixture: ComponentFixture<ShowresultpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowresultpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
