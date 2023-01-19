import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu: { defaultOptions:Array<any>, accesslink:Array<any>} 
  = {defaultOptions:[],accesslink:[] }

  customOptions: Array<any> = []

  constructor() {}

  ngOnInit(): void {
  this.mainMenu.defaultOptions = [

    {
      name: 'home',
      icon: 'ui uil-estate'
    },

    {
      name: 'Buscar',
      icon: 'uil uil-search uil'
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil uil-book'
    }

  ]

  this.mainMenu.accesslink = [
    {
      name: 'Crear lista',
      icon: 'uil-list-ul'
    },
    {
      name: 'Favoritas',
      icon:'uil-heart'
    }
  ]

  this.customOptions = [
    {
      name:' Mi lista 1°'
    },
    {
      name:' Mi lista 2°'
    },
    {
      name:' Mi lista 3°'
    },
    {
      name:' Mi lista 4'
    }
  ]

  }
}
