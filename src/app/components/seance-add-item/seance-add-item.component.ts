
import { TmplAstTemplate } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hall } from 'src/app/interface/Hall';
import { Movie } from 'src/app/interface/Movie';
import { Seance } from 'src/app/interface/Seance';
import { DbConnectionService } from 'src/app/services/db-connection.service';

@Component({
  selector: 'app-seance-add-item',
  templateUrl: './seance-add-item.component.html',
  styleUrls: ['./seance-add-item.component.css']
})
export class SeanceAddItemComponent implements OnInit {
  @Input() seances!: Seance[];
  @Output() onAddSeance: EventEmitter<Seance> = new EventEmitter();

  //for input
  date?: Date | undefined;
  time?: Date | undefined;
  //by seletc
  movieId: number | undefined;
  hallId: number | undefined;
  //default 0
  seatsTaken: number[] | undefined;

  //for select list
  movies: Movie[] | undefined;
  halls: Hall[] | undefined;

  //additional
  movie: Movie | undefined;

  constructor(private db: DbConnectionService) { }

  ngOnInit(): void {
    this.db
    .getAllMovie()
    .subscribe(
      (movie)=> this.movies = movie);

      this.db
      .getAllHall()
      .subscribe( 
        (hall)=> this.halls = hall );
  }

  onSubmit(){
    
    if(this.dataValidation() == true){
      let dateInput = new Date(this.date!.toString());
    let timeInputTmp = this.time!.toString();
    let timeImput = timeInputTmp.split(":");
    dateInput.setHours(parseInt(timeImput[0]), parseInt(timeImput[1]));
    let dateEnd = new Date(dateInput);
    this.movies?.findIndex((m)=>{
      if(m.id == this.movieId){
        this.movie = m;
      }})
      console.log(this.movie!.duration);
    dateEnd.setMinutes(dateEnd.getMinutes()+ this.movie!.duration);

    if(this.ifDate(dateInput) == true && this.onTaken(this.hallId!, dateInput, dateEnd) == true){
      const newSeance = {
        date: dateInput!,
        dateEnd: dateEnd!,
        seatsTaken: [],

        movieId: this.movieId!,
        hallId: this.hallId!,
      };

      console.log(newSeance);
      this.onAddSeance.emit(newSeance);
    }
      

      this.date = undefined;
      this.time = undefined;
      this.movieId = undefined;
      this.hallId = undefined;
      this.seatsTaken = undefined;
    }
    
  }

  dataValidation(): Boolean{
    if(!this.movieId || !this.time ||!this.date || !this.hallId){
      alert('Please complete the form');
      return false;
      }    
    return true;
  }
  ifDate(date: Date): Boolean{
    if(date > new Date()){
      return true;
    }
    else{
      alert("Seance cannot taking place in the past");
      return false;
    } 

  }
  onTaken(hall: number, date: Date, dateEnd: Date): Boolean{

    let ifHallEmpty = 0;
    this.seances.forEach(seance =>{
      console.log(date);
      console.log(dateEnd);
      console.log(new Date(seance.date));
      console.log(new Date(seance.dateEnd));

        if(date > new Date( seance.dateEnd.toString()) ||
        dateEnd < new Date(seance.date.toString())
        ){ console.log(" ")}
        else{
          if(hall == seance.hallId)
            ifHallEmpty = 1;
        }
    })
    if(ifHallEmpty == 1){
      alert("Another seance taking place in that hall");
      return false;
    }
    return true;
  }


}
