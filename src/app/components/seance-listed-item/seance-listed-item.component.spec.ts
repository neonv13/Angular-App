import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceListedItemComponent } from './seance-listed-item.component';

describe('SeanceListedItemComponent', () => {
  let component: SeanceListedItemComponent;
  let fixture: ComponentFixture<SeanceListedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceListedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceListedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
