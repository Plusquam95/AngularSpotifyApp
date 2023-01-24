import { Component } from '@angular/core';
import { ModelTracks } from '@core/models/tracks.models';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {

  mockTrackList:Array<ModelTracks> = []


constructor(){}
ngOnInit(): void {
  const { data }:any = (dataRaw as any).default 
  this.mockTrackList= data;
}

}
