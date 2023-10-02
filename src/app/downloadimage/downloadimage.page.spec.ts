import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadimagePage } from './downloadimage.page';

describe('DownloadimagePage', () => {
  let component: DownloadimagePage;
  let fixture: ComponentFixture<DownloadimagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DownloadimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
