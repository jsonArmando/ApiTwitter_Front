import { Component } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api_front';
  public twitter:Array<any> =[]
  constructor(
    private twitterService:TwitterService
  ){
    this.twitterService.getTwitter().subscribe((resp:any)=>{
      console.log(resp)
      this.twitter = resp
    })
  }
}
