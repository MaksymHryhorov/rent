import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCarDetailsComponent } from './save-car-details.component';

describe('SaveCarDetailsComponent', () => {
  let component: SaveCarDetailsComponent;
  let fixture: ComponentFixture<SaveCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCarDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
