import { Component, OnInit } from '@angular/core';
import { DbConnectionService } from 'src/app/services/db-connection.service';

import { Movie } from '../../interface/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private dbConnectionService: DbConnectionService) { }

  ngOnInit(): void {
    this.dbConnectionService
    .getAllMovie()
    .subscribe(
      (movie)=> this.movies = movie);
  }

}
