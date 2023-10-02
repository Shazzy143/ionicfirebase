import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewspopupPage } from './newspopup.page';

describe('NewspopupPage', () => {
  let component: NewspopupPage;
  let fixture: ComponentFixture<NewspopupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewspopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
