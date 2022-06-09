import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddItemComponent } from './movie-add-item.component';

describe('MovieAddItemComponent', () => {
  let component: MovieAddItemComponent;
  let fixture: ComponentFixture<MovieAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAddItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
