import { Component } from '@angular/core';
import { ressults } from './result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework4';
  results = ressults;
  currentIndex : number = -1;

  constructor(){
  }
}
