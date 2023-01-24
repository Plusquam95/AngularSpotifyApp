import { Component } from '@angular/core';
import { ModelTracks } from '@core/models/tracks.models';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent {

  mockCover: ModelTracks = {
    cover:'https://i.scdn.co/image/ab67616d0000b2733e4b5368bf7ad20f19cc4812',
    album: 'San Lucas',
    name: 'Vámonos a Marte',
    _id: '21',
    url:'si'
  }
  
  constructor(){}

    ngOnInit():void{}

}
