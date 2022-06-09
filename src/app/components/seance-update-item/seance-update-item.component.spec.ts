import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceUpdateItemComponent } from './seance-update-item.component';

describe('SeanceUpdateItemComponent', () => {
  let component: SeanceUpdateItemComponent;
  let fixture: ComponentFixture<SeanceUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
