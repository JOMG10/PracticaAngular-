import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modalUtilizable';


   data = [
    {
      nombre:"Genaro",
      apellido:"Jose",
      carrera:"Informatica",

    },
     {
       nombre:"Angel",
       apellido:"Fernando",
       carrera:"Informatica",

     },
     {
       nombre:"Kevin",
       apellido:"Arango",
       carrera:"Informatica",

     },
     {
       nombre:"Eduardo",
       apellido:"Emilio",
       carrera:"Informatica",

     }
  ]

}


