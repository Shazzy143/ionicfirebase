import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasheetPage } from './datasheet.page';

describe('DatasheetPage', () => {
  let component: DatasheetPage;
  let fixture: ComponentFixture<DatasheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatasheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
