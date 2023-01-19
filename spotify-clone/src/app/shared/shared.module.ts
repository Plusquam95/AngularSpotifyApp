import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsPlayerComponent } from './components/cards-player/cards-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderComponent,
    CardsPlayerComponent,
    GenericSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    MediaplayerComponent,
    HeaderComponent,
    CardsPlayerComponent,
    GenericSectionComponent
  ]
})
export class SharedModule { }
