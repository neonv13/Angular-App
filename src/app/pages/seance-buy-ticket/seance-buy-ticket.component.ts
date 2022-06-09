import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit , EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seance } from 'src/app/interface/Seance';
import { DbConnectionService } from 'src/app/services/db-connection.service';




@Component({
  selector: 'app-seance-buy-ticket',
  templateUrl: './seance-buy-ticket.component.html',
  styleUrls: ['./seance-buy-ticket.component.css']
})
export class SeanceBuyTicketComponent implements OnInit {

  seanceIdFormParams!: number;
  seatsList: Number[] = [];
  seance!: Seance;
  seat!: Number;


  constructor(private route: ActivatedRoute, private db: DbConnectionService) {
    this.route.params
    .subscribe( params => this.seanceIdFormParams = params['id']);
   
    
  
  }

  ngOnInit(): void {
    this.db
    .getSeance(this.seanceIdFormParams)
    .subscribe((seance)=> {
      this.seance = seance;

      this.db
      .getHall(this.seance.hallId)
      .subscribe((hall)=> 
      {
        this.seat = hall.seats
        this.seatsList = [].constructor(this.seat);
        
        this.seance.seatsTaken.forEach(seat =>{
          this.seatsList[seat] = 2;
        })
      }
      );
    }); 
  }

  onClick(nr: number, ){
    if(this.seatsList[nr] == 0 ||!this.seatsList[nr]){
      this.seatsList[nr] = 1;
      console.log("book");
    }else if(this.seatsList[nr] == 1){
      this.seatsList[nr] = 0;
      console.log("free");
    }
    else{
      console.log("booked");
    }
  }
  onSave(){
    console.log("Just save It");
    for(let i = 0; i < this.seatsList.length; i++){
      if(this.seatsList[i] == 1){
        this.seance.seatsTaken.push(i);
      }
    }
    console.log(this.seance);
    this.db.updateSeance(this.seance)
    .subscribe();
  }

}
