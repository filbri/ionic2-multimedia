//import { EliteApi } from '../shared/elite-api.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { TournamentsPage, GamePage, TeamsPage, TeamDetailPage, MyTeamsPage } from '../pages/pages';
import { EliteApi } from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [
    EliteApi,
    HttpModule
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 },
      { title: 'Tournaments', component: TournamentsPage },
      { title: 'Game', component: GamePage },
      { title: 'Teams', component: TeamsPage },
      { title: 'Team Detail', component: TeamDetailPage },
      { title: 'My Teams', component: MyTeamsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  /*openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }*/

  goHome() {
    this.nav.push(MyTeamsPage);
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

}
