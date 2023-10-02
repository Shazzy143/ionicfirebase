import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FessPage } from './fess.page';

describe('FessPage', () => {
  let component: FessPage;
  let fixture: ComponentFixture<FessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
