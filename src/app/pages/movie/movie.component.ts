import { Component, OnInit } from '@angular/core';
import { DbConnectionService } from 'src/app/services/db-connection.service';

import { Movie } from '../../interface/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  movieupdate: Movie | undefined;

  constructor(private dbConnectionService: DbConnectionService) { }

  ngOnInit(): void {
    this.dbConnectionService
    .getAllMovie()
    .subscribe(
      (movie)=> this.movies = movie);
  }

  addMovie(movie: Movie){
    this.dbConnectionService
    .addMovie(movie)
    .subscribe(
      (movie)=>(this.movies.push(movie)));
  }
  deleteMovie(movie: Movie){
    this.dbConnectionService
    .deleteMovie(movie)
    .subscribe(
      () => (this.movies = this.movies.filter( 
        (m) => m.id !== movie.id)));
  }
  updateMovie(movie: Movie){
    this.dbConnectionService
    .updateMovie(movie)
    .subscribe((movie)=>{
      this.movies[this.movies.findIndex(m => m.id == movie.id)] = movie;
    });
  }
  updateMovieRequest(movie: Movie){
    this.movieupdate = movie;
  }
  updateCancel(){
    this.movieupdate = undefined;
  }

}
