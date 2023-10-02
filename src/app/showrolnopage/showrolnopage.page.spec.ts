import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowrolnopagePage } from './showrolnopage.page';

describe('ShowrolnopagePage', () => {
  let component: ShowrolnopagePage;
  let fixture: ComponentFixture<ShowrolnopagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowrolnopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
