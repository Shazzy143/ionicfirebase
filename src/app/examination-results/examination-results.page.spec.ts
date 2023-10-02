import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExaminationResultsPage } from './examination-results.page';

describe('ExaminationResultsPage', () => {
  let component: ExaminationResultsPage;
  let fixture: ComponentFixture<ExaminationResultsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExaminationResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
