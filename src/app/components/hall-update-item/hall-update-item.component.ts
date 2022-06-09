import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hall } from 'src/app/interface/Hall';

@Component({
  selector: 'app-hall-update-item',
  templateUrl: './hall-update-item.component.html',
  styleUrls: ['./hall-update-item.component.css']
})
export class HallUpdateItemComponent implements OnInit {
  @Input() hall?: Hall;
  @Input() halls!: Hall[];
  @Output() onUpdateHall: EventEmitter<Hall> = new EventEmitter();
  @Output() onCancelUpdate: EventEmitter<Hall> = new EventEmitter();

  nr!: number | undefined;
  seats!: number | undefined;
  id!: number| undefined;

  constructor() { }

  ngOnInit(): void {
    this.nr = this.hall!.nr;
    this.seats = this.hall!.seats;
    this.id = this.hall!.id;

  }
  onSubmit(some: number){
    if(some == 0){

      if(this.dataValidation() == true)
      {const newMovie = {
        nr: this.nr!,
        seats: this.seats!,
        id: this.id!
      }
      
      this.onUpdateHall.emit(newMovie);
    }}
    

    this.nr = undefined;
    this.seats = undefined;

    this.onCancelUpdate.emit();
  }
  dataValidation(): Boolean{
    if(!this.nr || !this.seats){
      alert('Please complete the form');
      return false;
    }
    let tmpTitle = 0;
    this.halls.forEach(hall =>{
      if(hall.nr == this.nr&& this.hall!.nr != this.nr){
        alert("Hall with that number already exist");
        tmpTitle = 1;
      }
    })
    if(tmpTitle == 1){
      return false;
    }

    if(this.seats > 200){
      alert("Hall can't cahe more than 200 seats ");
      return false;
    }
    if(this.seats < 20){
      alert("Hall must have at least 20");
      return false;
    }
    
    
    return true;
  }
}

