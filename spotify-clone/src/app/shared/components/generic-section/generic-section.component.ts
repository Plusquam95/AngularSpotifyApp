import { Component, Input, OnInit } from '@angular/core';
import { ModelTracks } from '@core/models/tracks.models';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent implements OnInit{
  
@Input() title :string = ''
@Input() mode : 'small'| 'big' = 'big'
@Input() dataTracks: Array<ModelTracks> = []

constructor(){}
ngOnInit(): void {
  
}
}
