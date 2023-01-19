import { Component } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent {

  mockCover:any = {
    cover:'https://i.scdn.co/image/ab67616d0000b2733e4b5368bf7ad20f19cc4812',
    album: 'San Lucas',
    name: 'Vámonos a Marte',
  }
  
  constructor(){}

    ngOnInit():void{}

}
