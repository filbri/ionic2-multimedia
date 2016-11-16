import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import 'rxjs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class EliteApi {

    private baseUrl = 'https://elite-schedule-3ed06.firebaseio.com/';
    currentTourney: any = {};

    constructor(private http: Http) { }

    getTournaments(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

    getTournamentData(tourneyId) : Observable<any> {
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
            .map((response: Response) => {
                this.currentTourney = response.json();
                return this.currentTourney;
            });
    }

    getCurrentTourney() {
        return this.currentTourney;
    }

} 