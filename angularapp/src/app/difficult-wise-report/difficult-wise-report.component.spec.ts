import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultWiseReportComponent } from './difficult-wise-report.component';

describe('DifficultWiseReportComponent', () => {
  let component: DifficultWiseReportComponent;
  let fixture: ComponentFixture<DifficultWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultWiseReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
