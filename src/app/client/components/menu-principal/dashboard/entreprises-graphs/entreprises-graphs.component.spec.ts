import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesGraphsComponent } from './entreprises-graphs.component';

describe('EntreprisesGraphsComponent', () => {
  let component: EntreprisesGraphsComponent;
  let fixture: ComponentFixture<EntreprisesGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisesGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreprisesGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
