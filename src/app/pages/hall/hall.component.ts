import { Component, OnInit } from '@angular/core';
import { DbConnectionService } from 'src/app/services/db-connection.service';


import {Hall} from '../../interface/Hall';
@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  halls: Hall[] = [];
  hallupdate: Hall | undefined;

  constructor(private dbConnectionService: DbConnectionService) { }

  ngOnInit(): void {
    this.dbConnectionService
    .getAllHall()
    .subscribe( 
      (hall)=> this.halls = hall );
  }

  addHall(hall: Hall){
    this.dbConnectionService
    .addHall(hall)
    .subscribe(
      (hall)=>(this.halls.push(hall)));
  }
  deleteHall(hall: Hall){
    this.dbConnectionService
    .deleteHall(hall)
    .subscribe(
      () => (this.halls = this.halls.filter( (h) => h.id !== hall.id)));
  }
  updateHall(hall: Hall){
    this.dbConnectionService
    .updateHall(hall)
    .subscribe((hall)=>{
      this.halls[this.halls.findIndex(h => h.id == hall.id)] = hall;
    });
  }

  updateHallRequest(hall: Hall){
    this.hallupdate = hall;
  }
  updateCancel(){
    this.hallupdate = undefined;
  }

}
