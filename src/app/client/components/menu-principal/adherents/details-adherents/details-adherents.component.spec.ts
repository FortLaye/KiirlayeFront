import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdherentsComponent } from './details-adherents.component';

describe('DetailsAdherentsComponent', () => {
  let component: DetailsAdherentsComponent;
  let fixture: ComponentFixture<DetailsAdherentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdherentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAdherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
