//import { LoadingController } from 'ionic-angular/umd';
import { TeamHomePage } from '../../../.tmp/pages/pages';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { TournamentsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

/*
  Generated class for the MyTeams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  favorites = [
    {
      team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
      tournementId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
      tournementId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hoops Challenge'
    },
  ];

  constructor(public navCtrl: NavController, private loadingController: LoadingController, private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    console.log('Hello MyTeamsPage Page');
  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite) {
    console.log(favorite);
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
  }

}
