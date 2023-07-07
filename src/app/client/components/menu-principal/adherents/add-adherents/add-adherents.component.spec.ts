import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdherentsComponent } from './add-adherents.component';

describe('AddAdherentsComponent', () => {
  let component: AddAdherentsComponent;
  let fixture: ComponentFixture<AddAdherentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdherentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
