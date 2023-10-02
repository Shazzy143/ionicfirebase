import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotifiactionimagePage } from './notifiactionimage.page';

describe('NotifiactionimagePage', () => {
  let component: NotifiactionimagePage;
  let fixture: ComponentFixture<NotifiactionimagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotifiactionimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
