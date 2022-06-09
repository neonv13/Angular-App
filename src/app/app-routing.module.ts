import { identifierName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallComponent } from './pages/hall/hall.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieComponent } from './pages/movie/movie.component';
import { Page404Component } from './pages/page404/page404.component';
import { SeanceBuyTicketComponent } from './pages/seance-buy-ticket/seance-buy-ticket.component';
import { SeanceListComponent } from './pages/seance-list/seance-list.component';
import { SeanceComponent } from './pages/seance/seance.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie', component: MovieComponent},
  {path: 'hall', component: HallComponent},
  {path: 'seance', component: SeanceComponent},
  {path: 'seance-list', component: SeanceListComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'buy-ticket/:id', component: SeanceBuyTicketComponent},
  {path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
