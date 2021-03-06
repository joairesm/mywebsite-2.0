import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './../models/model';

@Injectable()
export class TwitterService {

    private requestUrl: string;
    constructor(private _http: HttpClient) {}

    getTweets() {
        var model = new Model();
        this.requestUrl = 'https://myawesomeapi-7d029.firebaseapp.com/twitter/latest?sec_code=' 
        + model.sec_code;
        return this._http.get(this.requestUrl);
    }
}
