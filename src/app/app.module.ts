import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { TournamentsPage, GamePage, MyTeamsPage, TeamsPage, TeamDetailPage, TeamHomePage, StandingsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    TournamentsPage,
    GamePage,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    TournamentsPage,
    GamePage,
    MyTeamsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
  ],
  providers: []
})
export class AppModule {}
