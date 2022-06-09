import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallAddItemComponent } from './hall-add-item.component';

describe('HallAddItemComponent', () => {
  let component: HallAddItemComponent;
  let fixture: ComponentFixture<HallAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
