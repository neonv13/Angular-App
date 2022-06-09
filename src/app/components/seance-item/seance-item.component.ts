import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Seance } from 'src/app/interface/Seance';

@Component({
  selector: 'app-seance-item',
  templateUrl: './seance-item.component.html',
  styleUrls: ['./seance-item.component.css']
})
export class SeanceItemComponent implements OnInit {

  @Input() seance!: Seance;
  @Output() onDeleteSeance: EventEmitter<Seance> = new EventEmitter();
  @Output() onUpdateSeanceRequest: EventEmitter<Seance> = new EventEmitter();
  constructor(
  ) { }

  ngOnInit(): void {
  }
  onDelete(seance: Seance){
    // console.log(seance);
    this.onDeleteSeance.emit(seance);
  }
  onUpdateRequest(seance: Seance){
    this.onUpdateSeanceRequest.emit(seance);
  }

}
