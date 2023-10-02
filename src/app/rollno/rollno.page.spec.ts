import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RollnoPage } from './rollno.page';

describe('RollnoPage', () => {
  let component: RollnoPage;
  let fixture: ComponentFixture<RollnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RollnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
