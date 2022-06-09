import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Movie } from 'src/app/interface/Movie';

@Component({
  selector: 'app-movie-add-item',
  templateUrl: './movie-add-item.component.html',
  styleUrls: ['./movie-add-item.component.css']
})
export class MovieAddItemComponent implements OnInit {
  @Input() movies!: Movie[];
  @Output() onAddMovie: EventEmitter<Movie> = new EventEmitter();

  title!: string;
  duration!: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.dataValidation() == true){
      const newMovie = {
        title: this.title!,
        duration: this.duration!
      }
  
      this.onAddMovie.emit(newMovie);
  
      this.title = "";
      this.duration = undefined;
    } 
  }
  dataValidation(): Boolean{
    if(!this.title || !this.duration){
      alert('Please complete the form');
      return false;
    }
    let tmpTitle = 0;
    this.movies.forEach(movie =>{
      if(movie.title == this.title){
        alert("Movie with that title already exist");
        tmpTitle = 1;
      }
    })
    if(tmpTitle == 1){
      return false;
    }

    if(this.duration > 400){
      alert("Movie is too long");
      return false;
    }
    if(this.duration < 50){
      alert("Movie is too short");
      return false;
    }
    
    
    return true;
  }

}
