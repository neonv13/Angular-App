import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallUpdateItemComponent } from './hall-update-item.component';

describe('HallUpdateItemComponent', () => {
  let component: HallUpdateItemComponent;
  let fixture: ComponentFixture<HallUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
