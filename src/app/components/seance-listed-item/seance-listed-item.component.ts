import { Component, OnInit, Input} from '@angular/core';
import { Hall } from 'src/app/interface/Hall';
import { Movie } from 'src/app/interface/Movie';
import { Seance } from 'src/app/interface/Seance';
import { DbConnectionService } from 'src/app/services/db-connection.service';

@Component({
  selector: 'app-seance-listed-item',
  templateUrl: './seance-listed-item.component.html',
  styleUrls: ['./seance-listed-item.component.css']
})
export class SeanceListedItemComponent implements OnInit {

  @Input() seance!: Seance;
  movie!: Movie;
  hall!: Hall;
  date: Date = new Date();
  constructor(
    private db: DbConnectionService
  ) { }

  ngOnInit(): void {
    this.db.getMovie(this.seance.movieId).subscribe(movie => this.movie = movie);
    this.db.getHall(this.seance.hallId).subscribe(hall => this.hall = hall);
  }
  ifInPast(): Boolean{
    if(new Date(this.seance.date.toString()) < this.date)
    return true;
    return false;

  }
  onGoing(): Boolean{
    if(new Date(this.seance.date.toString()) < this.date &&
    new Date(this.seance.dateEnd.toString()) > this.date
    )
    return true;
    return false;
  }
  getSeats(): number{
    let tmp = this.seance.seatsTaken.length;
    return this.hall.seats - tmp;
  }

}