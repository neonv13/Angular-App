import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpdateItemComponent } from './movie-update-item.component';

describe('MovieUpdateItemComponent', () => {
  let component: MovieUpdateItemComponent;
  let fixture: ComponentFixture<MovieUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieUpdateItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
