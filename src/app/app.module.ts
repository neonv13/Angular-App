import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HallComponent } from './pages/hall/hall.component';
import { SeanceComponent } from './pages/seance/seance.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieAddItemComponent } from './components/movie-add-item/movie-add-item.component';
import { MovieUpdateItemComponent } from './components/movie-update-item/movie-update-item.component';
import { HallItemComponent } from './components/hall-item/hall-item.component';
import { HallAddItemComponent } from './components/hall-add-item/hall-add-item.component';
import { HallUpdateItemComponent } from './components/hall-update-item/hall-update-item.component';
import { SeanceItemComponent } from './components/seance-item/seance-item.component';
import { SeanceAddItemComponent } from './components/seance-add-item/seance-add-item.component';
import { SeanceUpdateItemComponent } from './components/seance-update-item/seance-update-item.component';
import { SeanceListComponent } from './pages/seance-list/seance-list.component';
import { SeanceListedItemComponent } from './components/seance-listed-item/seance-listed-item.component';
import { SeanceBuyTicketComponent } from './pages/seance-buy-ticket/seance-buy-ticket.component';
import { Page404Component } from './pages/page404/page404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieListedItemComponent } from './components/movie-listed-item/movie-listed-item.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieSeanceItemComponent } from './components/movie-seance-item/movie-seance-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HallComponent,
    SeanceComponent,
    MovieItemComponent,
    MovieAddItemComponent,
    MovieUpdateItemComponent,
    HallItemComponent,
    HallAddItemComponent,
    HallUpdateItemComponent,
    SeanceItemComponent,
    SeanceAddItemComponent,
    SeanceUpdateItemComponent,
    SeanceListComponent,
    SeanceListedItemComponent,
    SeanceBuyTicketComponent,
    Page404Component,
    NavBarComponent,
    MovieListComponent,
    MovieListedItemComponent,
    HomeComponent,
    MovieSeanceItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
