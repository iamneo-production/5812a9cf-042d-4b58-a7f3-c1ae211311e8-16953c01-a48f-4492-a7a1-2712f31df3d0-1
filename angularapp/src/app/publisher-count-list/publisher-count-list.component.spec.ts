import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherCountListComponent } from './publisher-count-list.component';

describe('PublisherCountListComponent', () => {
  let component: PublisherCountListComponent;
  let fixture: ComponentFixture<PublisherCountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherCountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherCountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
