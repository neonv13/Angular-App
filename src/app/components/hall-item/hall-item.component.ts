import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hall } from 'src/app/interface/Hall';

@Component({
  selector: 'app-hall-item',
  templateUrl: './hall-item.component.html',
  styleUrls: ['./hall-item.component.css']
})
export class HallItemComponent implements OnInit {
  @Input() hall!: Hall;
  @Output() onDeleteHall: EventEmitter<Hall> = new EventEmitter();
  @Output() onUpdateHallRequest: EventEmitter<Hall> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(hall: Hall){
    console.log(hall);
    this.onDeleteHall.emit(hall);
  }
  onUpdateRequest(hall: Hall){
    this.onUpdateHallRequest.emit(hall);
  }

}
