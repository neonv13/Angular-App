import { Component, Input, OnInit } from '@angular/core';
import { Seance } from 'src/app/interface/Seance';
import { Movie } from '../../interface/Movie'

@Component({
  selector: 'app-movie-seance-item',
  templateUrl: './movie-seance-item.component.html',
  styleUrls: ['./movie-seance-item.component.css']
})
export class MovieSeanceItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() seances!: Seance[];
  // seancesDate! : Seance[];
  check: number = 0;
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  checkSeances(): Boolean{
    if(this.seances.length > 0){
      return true;

    }else return false;
  }
  getLink(id : number): String{
    let tmp = "/buy-ticket/";
    tmp = tmp + id;
    return tmp;
  }
  ifActive(seance: Seance) :Boolean{
    let now = new Date();
    let tmp = new Date(seance.date.toString());
    if(tmp > now)
    return true;
    return false;
  }
  onGoing(seance: Seance): Boolean{
    if(new Date(seance.date.toString()) < this.date &&
    new Date(seance.dateEnd.toString()) > this.date
    )
    return true;
    return false;
  }
  getTicket(): number{

    let tmp = 0;
    this.seances.forEach(seance =>{
      tmp = tmp + seance.seatsTaken.length;
    })
    return tmp;
  }

}
