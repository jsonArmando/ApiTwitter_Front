import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
_url = 'http://localhost:8089/v1/twitter'
  constructor(
    private http:HttpClient
  ) { 
    console.log("Servicio Twitter")
  }
  getTwitter(){
    let heades = new HttpHeaders()
    .set('Type-content','application/json')

    return this.http.get(this._url,{
      headers:heades
    })
  }
}
