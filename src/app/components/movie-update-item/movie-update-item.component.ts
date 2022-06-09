import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Movie } from 'src/app/interface/Movie';

@Component({
  selector: 'app-movie-update-item',
  templateUrl: './movie-update-item.component.html',
  styleUrls: ['./movie-update-item.component.css']
})
export class MovieUpdateItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() movies!: Movie[];
  @Output() onUpdateMovie: EventEmitter<Movie> = new EventEmitter();
  @Output() onCancelUpdate: EventEmitter<Movie> = new EventEmitter();

  title!: String;
  duration!: number | undefined;
  id!: number| undefined;

  constructor() {
   }

  ngOnInit(): void {
    this.title = this.movie!.title;
    this.duration = this.movie!.duration;
    this.id = this.movie!.id;

  }
  onSubmit(some: number){
    if(some == 0){

      if(this.dataValidation() == true){
        const newMovie = {
          title: this.title!,
          duration: this.duration!,
          id: this.id!
        }
        
        this.onUpdateMovie.emit(newMovie);
      }
    }
    

    this.title = "";
    this.duration = undefined;

    this.onCancelUpdate.emit();
  }

  dataValidation(): Boolean{
    let tmpTitle = 0;
    this.movies.forEach(movie =>{
      if(movie.title == this.title && movie.title != this.movie!.title){
        alert("Movie with that title already exist");
        tmpTitle = 1;
      }
    })
    if(tmpTitle == 1){
      return false;
    }

    if(this.duration! > 400){
      alert("Movie is too long");
      return false;
    }
    if(this.duration! < 50){
      alert("Movie is too short");
      return false;
    }
    
    
    return true;
  }
}
