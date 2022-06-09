import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListedItemComponent } from './movie-listed-item.component';

describe('MovieListedItemComponent', () => {
  let component: MovieListedItemComponent;
  let fixture: ComponentFixture<MovieListedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
