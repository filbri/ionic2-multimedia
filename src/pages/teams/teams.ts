//import { NavParams } from 'ionic-angular/es2015';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];

  /*teams = [
    { id: 1, name: 'HC Elite' },
    { id: 2, name: 'Team Takeover' },
    { id: 3, name: 'DC Thunder' },
  ];*/

  constructor(public navCtrl: NavController, private navParams: NavParams, private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    console.log('Hello TeamsPage Page');
    let selectedTourney = this.navParams.data;
    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
