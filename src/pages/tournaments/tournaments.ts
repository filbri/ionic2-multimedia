import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';

import { TeamsPage } from '../pages'
import { EliteApi } from '../../shared/shared'

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(public navCtrl: NavController, private eliteApi: EliteApi, private loadingController: LoadingController) {}

  /*ionViewLoaded() {
    console.log("Entrou no Loaded");
    this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }*/

  ionViewDidLoad() {
    console.log('Hello TournamentsPage Page');
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
  }

  itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }

}
