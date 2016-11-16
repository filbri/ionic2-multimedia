//import { NavParams } from 'ionic-angular/es2015';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EliteApi } from '../../shared/shared';
import { TeamHomePage } from '../pages';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  theGame: any;

  constructor(public navCtrl: NavController, private navParams:NavParams, private eliteApi: EliteApi) {
    this.theGame = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('Hello GamePage Page');
    /*this.theGame = this.navParams.data;*/
    console.log(this.theGame);
  }

  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}
