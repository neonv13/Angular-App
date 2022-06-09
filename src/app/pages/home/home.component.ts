import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { Seance } from 'src/app/interface/Seance';
import { DbConnectionService } from 'src/app/services/db-connection.service';

import { Movie } from '../../interface/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  seances: Seance[] = [];
  date: Date = new Date();

  formDate?: Date;

  constructor(private dbConnectionService: DbConnectionService) { }

  ngOnInit(): void {
    this.dbConnectionService
    .getAllMovie()
    .subscribe(
      (movie)=> this.movies = movie
      );
    this.dbConnectionService
    .getAllSeance()
    .subscribe(
      (seance) => this.seances = seance
    );
  }

  getSeances(movie : Movie): Seance[]{
    let tmp = this.seances.filter(seance => seance.movieId == movie.id);
    tmp = tmp.filter(seance =>
      new Date(seance.date.toString()).getDate() == this.date.getDate()
      );
    tmp = tmp.filter(seance =>
        new Date(seance.date.toString()).getMonth() == this.date.getMonth()
        );
    tmp = tmp.filter(seance =>
      new Date(seance.date.toString()).getFullYear() == this.date.getFullYear()
      );
    return tmp;
  }
  onSubmit(){
    this.date = new Date(this.formDate!.toString());

  }
}
