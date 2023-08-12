import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherOverlayPanalComponent } from './publisher-overlay-panal.component';

describe('PublisherOverlayPanalComponent', () => {
  let component: PublisherOverlayPanalComponent;
  let fixture: ComponentFixture<PublisherOverlayPanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherOverlayPanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherOverlayPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
