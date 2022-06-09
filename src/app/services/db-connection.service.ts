import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Movie } from '../interface/Movie';
import { Hall } from '../interface/Hall';
import { Seance } from '../interface/Seance';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {
  private apiUrl = 'http://localhost:3000';
  private movieUrl = '/movies';
  private hallUrl = '/halls';
  private seanceUrl = '/seances';

  constructor(private http:HttpClient) { }

  //Hall get all- get/id - add - delete - update
  getAllMovie(): Observable<Movie[]>{
    const url = this.apiUrl+ this.movieUrl;
    return this.http.get<Movie[]>(url);
  }
  getMovie(id : number):Observable<Movie>{
    const url = this.apiUrl+ this.movieUrl + "/" + id;
    // console.log(id)
    return this.http.get<Movie>(url);
  }
  addMovie(movie:Movie):Observable<Movie>{
    const url = this.apiUrl+ this.movieUrl;
    return this.http.post<Movie>(url,movie,httpOption);
  }
  deleteMovie(movie:Movie):Observable<Movie>{
    const url = this.apiUrl+ this.movieUrl + "/" + movie.id;
    return this.http.delete<Movie>(url);
  }
  updateMovie(movie: Movie):Observable<Movie>{
    
    const url = this.apiUrl+ this.movieUrl + "/" + movie.id;
    console.log(url); 
    return this.http.put<Movie>(url,movie,httpOption);
  }
  //Hall add - delete - update

  getAllHall(): Observable<Hall[]>{
    const url = this.apiUrl+ this.hallUrl;
    return this.http.get<Hall[]>(url);
  }
  getHall(id : number){
    const url = this.apiUrl+ this.hallUrl + "/" + id;
    console.log(id)
    return this.http.get<Hall>(url);
  }
  addHall(hall:Hall):Observable<Hall>{
    const url = this.apiUrl+ this.hallUrl;
    return this.http.post<Hall>(url,hall,httpOption);
  }
  deleteHall(hall:Hall):Observable<Hall>{
    const url = this.apiUrl+ this.hallUrl + "/" + hall.id;
    return this.http.delete<Hall>(url);
  }
  updateHall(hall: Hall):Observable<Hall>{  
    const url = this.apiUrl+ this.hallUrl + "/" + hall.id;
    return this.http.put<Hall>(url,hall,httpOption);
  }
  //Seance add - delete - update

  getAllSeance(): Observable<Seance[]>{
    const url = this.apiUrl + this.seanceUrl;
    return this.http.get<Seance[]>(url)
  }
  getSeance(id: number): Observable<Seance>{
    const url = this.apiUrl + this.seanceUrl + "/"+ id;
    return this.http.get<Seance>(url)
  }
  addSeance(seance: Seance): Observable<Seance>{
    const url = this.apiUrl + this.seanceUrl;
    return this.http.post<Seance>(url,seance,httpOption);
  }
  deleteSeance(seance:Seance):Observable<Seance>{
    const url = this.apiUrl + this.seanceUrl + "/"+ seance.id;
    return this.http.delete<Seance>(url);
  }
  updateSeance(seance:Seance):Observable<Seance>{
    console.log(seance);
    const url = this.apiUrl + this.seanceUrl + "/"+ seance.id;
    return this.http.put<Seance>(url,seance,httpOption);
  }

}
