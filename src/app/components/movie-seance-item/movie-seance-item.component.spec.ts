import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSeanceItemComponent } from './movie-seance-item.component';

describe('MovieSeanceItemComponent', () => {
  let component: MovieSeanceItemComponent;
  let fixture: ComponentFixture<MovieSeanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSeanceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSeanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
