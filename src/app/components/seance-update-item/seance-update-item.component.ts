import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hall } from 'src/app/interface/Hall';
import { Movie } from 'src/app/interface/Movie';
import { Seance } from 'src/app/interface/Seance';
import { DbConnectionService } from 'src/app/services/db-connection.service';

@Component({
  selector: 'app-seance-update-item',
  templateUrl: './seance-update-item.component.html',
  styleUrls: ['./seance-update-item.component.css']
})
export class SeanceUpdateItemComponent implements OnInit {
  @Input() seance!: Seance;
  @Input() seances!: Seance[];
  @Output() onUpdateSeance: EventEmitter<Seance> = new EventEmitter();
  @Output() onCancelUpdate: EventEmitter<Movie> = new EventEmitter();
  
  //for input
  date!: Date | undefined;
  time!: Date | undefined;
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

  dateTmp  = new Date();
  dateTmpEnd = new Date();

  seanceTmp! : Seance;

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

      this.dateTmp = new Date(this.seance.date.toString());
      this.dateTmpEnd = new Date(this.seance.date.toString());
      this.seanceTmp = this.seance;
      this.movieId = this.seance.movieId;
      this.hallId = this.seance.hallId;
  }

  onSubmit(control: number){
    if(control == 1){
      this.onCancelUpdate.emit();
      return
    }

    if(this.date){

      let dateT = this.date.toString();
      let dateTArr = dateT.split("-");

      this.dateTmp.setFullYear(parseInt(dateTArr[0]),parseInt(dateTArr[1])-1,parseInt(dateTArr[2]));
      this.dateTmpEnd.setFullYear(parseInt(dateTArr[0]),parseInt(dateTArr[1])-1,parseInt(dateTArr[2]));
    }
    if(this.time){
      let timeTmp = this.time.toString();
      let timeTArr = timeTmp.split(":");

      this.dateTmp.setHours(parseInt(timeTArr[0]),parseInt(timeTArr[1]),0);
      this.dateTmpEnd.setHours(parseInt(timeTArr[0]),parseInt(timeTArr[1]),0);
    }

    if(!this.movieId || !this.hallId){
    alert('Please complete the form');
    return
    }
  
    this.movies?.findIndex((m)=>{
      if(m.id == this.movieId){
        this.movie = m;
      }})
    
    this.dateTmpEnd.setMinutes(this.dateTmp.getMinutes() + this.movie!.duration);


    if(this.onTaken(this.hallId!, this.dateTmp, this.dateTmpEnd) == true){
      const newSeance = {
        date: this.dateTmp,
        dateEnd: this.dateTmpEnd,
        seatsTaken: [],
  
        movieId: this.movieId,
        hallId: this.hallId,
        id: this.seanceTmp.id
      };
      console.log("save data");
      this.onUpdateSeance.emit(newSeance);
  
      this.date = undefined;
      this.time = undefined;
      this.movieId = undefined;
      this.hallId = undefined;
      this.seatsTaken = undefined;
    }
    this.onCancelUpdate.emit();
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
          if(hall == seance.hallId && seance.id != this.seance.id)
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
