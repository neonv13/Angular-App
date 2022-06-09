import { Component, Input, OnInit} from '@angular/core';
import { Movie } from '../../interface/Movie'

@Component({
  selector: 'app-movie-listed-item',
  templateUrl: './movie-listed-item.component.html',
  styleUrls: ['./movie-listed-item.component.css']
})
export class MovieListedItemComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
