import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'flowbite'; // Import Flowbite


import {NgForOf, NgIf} from "@angular/common";
import {DialogCustomComponent} from "./dialog-custom/dialog-custom.component";
import {ServicioComponent} from "./components/servicio/servicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, DialogCustomComponent, NgIf, ServicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'modalUtilizable';

  opcion="Inicio"
  inicio="Inicio"
  sobreMi="sobreMi"

}


