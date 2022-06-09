import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceAddItemComponent } from './seance-add-item.component';

describe('SeanceAddItemComponent', () => {
  let component: SeanceAddItemComponent;
  let fixture: ComponentFixture<SeanceAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
