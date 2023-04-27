import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuresGraphsComponent } from './structures-graphs.component';

describe('StructuresGraphsComponent', () => {
  let component: StructuresGraphsComponent;
  let fixture: ComponentFixture<StructuresGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuresGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuresGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
