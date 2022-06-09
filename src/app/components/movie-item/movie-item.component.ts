
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interface/Movie'

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() onDeleteMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() onUpdateMovieRequest: EventEmitter<Movie> = new EventEmitter();
  constructor(
  ) { }

  ngOnInit(): void {
  }
  onDelete(movie: Movie){
    console.log(movie);
    this.onDeleteMovie.emit(movie);
  }
  onUpdateRequest(movie: Movie){
    this.onUpdateMovieRequest.emit(movie);
  }

}
