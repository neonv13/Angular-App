import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Hall } from 'src/app/interface/Hall';

@Component({
  selector: 'app-hall-add-item',
  templateUrl: './hall-add-item.component.html',
  styleUrls: ['./hall-add-item.component.css']
})
export class HallAddItemComponent implements OnInit {
  @Input() halls!: Hall[];
  @Output() onAddHall: EventEmitter<Hall> = new EventEmitter();

  nr!: number | undefined;
  seats!: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    
    if(this.dataValidation() == true)
    {const newHall = {
      nr: this.nr!,
      seats: this.seats!
    }

    this.onAddHall.emit(newHall);

    this.nr = undefined;
    this.seats = undefined;}
    
  }

  dataValidation(): Boolean{
    if(!this.nr || !this.seats){
      alert('Please complete the form');
      return false;
    }
    let tmpTitle = 0;
    this.halls.forEach(hall =>{
      if(hall.nr == this.nr){
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
