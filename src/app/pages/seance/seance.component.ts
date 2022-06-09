import { Component, OnInit } from '@angular/core';
import { DbConnectionService } from 'src/app/services/db-connection.service';

import { Seance } from '../../interface/Seance';
@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})
export class SeanceComponent implements OnInit {
  seances: Seance[] = [];
  seanceupdate: Seance | undefined;

  constructor(private dbConnectionService: DbConnectionService) { }

  ngOnInit(): void {
    this.dbConnectionService
    .getAllSeance()
    .subscribe(
      (seances) => this.seances = seances );
  }

  addSeance(seance:Seance){
    this.dbConnectionService
    .addSeance(seance)
    .subscribe(
      (seance)=>(this.seances.push(seance))
    );
  }

  deleteSeance(seance: Seance){
    console.log(seance);
    this.dbConnectionService
    .deleteSeance(seance)
    .subscribe(
      ()=> (this.seances = this.seances.filter(
        (s) => s.id !== seance.id
      )));
  }

  updateSeance(seance: Seance){
    this.dbConnectionService
    .updateSeance(seance)
    .subscribe((seance) =>{
      this.seances[this.seances.findIndex(s => s.id == seance.id)] = seance;
    });    
  }

  updateSeanceRequest(seance: Seance){
    this.seanceupdate = seance;
  }

  updateCancel(){
    this.seanceupdate = undefined;
  }

}
