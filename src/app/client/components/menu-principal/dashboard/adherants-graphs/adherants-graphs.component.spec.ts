import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherantsGraphsComponent } from './adherants-graphs.component';

describe('AdherantsGraphsComponent', () => {
  let component: AdherantsGraphsComponent;
  let fixture: ComponentFixture<AdherantsGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherantsGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdherantsGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
