import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'flowbite'; // Import Flowbite


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



}


