import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdherentsComponent } from './edit-adherents.component';

describe('EditAdherentsComponent', () => {
  let component: EditAdherentsComponent;
  let fixture: ComponentFixture<EditAdherentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdherentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
