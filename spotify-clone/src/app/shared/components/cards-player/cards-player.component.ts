import { Component, Input, OnInit } from '@angular/core';
import { ModelTracks } from '@core/models/tracks.models';

@Component({
  selector: 'app-cards-player',
  templateUrl: './cards-player.component.html',
  styleUrls: ['./cards-player.component.css']
})
export class CardsPlayerComponent implements OnInit{

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track:ModelTracks = {name:'', album:'', cover:'', url:'', _id:''};
  
  constructor() {}
  ngOnInit(): void {

  }
}
