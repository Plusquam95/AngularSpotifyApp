import { Component, OnInit } from '@angular/core';
import { ModelTracks } from '@core/models/tracks.models';
import * as dataRaw from '../../../data/tracks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  tracks: ModelTracks[]= []
  constructor(){}
  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
  this.tracks = data;
  }
}
