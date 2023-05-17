import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEntreprisesComponent } from './item-entreprises.component';

describe('ItemEntreprisesComponent', () => {
  let component: ItemEntreprisesComponent;
  let fixture: ComponentFixture<ItemEntreprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEntreprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
