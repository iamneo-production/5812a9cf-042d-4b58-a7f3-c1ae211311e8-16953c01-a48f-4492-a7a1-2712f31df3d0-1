import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherSchoolTableComponent } from './publisher-school-table.component';

describe('PublisherSchoolTableComponent', () => {
  let component: PublisherSchoolTableComponent;
  let fixture: ComponentFixture<PublisherSchoolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherSchoolTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherSchoolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
