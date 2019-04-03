import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the testing grounds';
  tiles: Tile[] = [
    {text: 'Apple', cols: 1, rows: 2, color: 'lightblue', image: 'https://res.cloudinary.com/du3klmijx/image/upload/v1554304241/Apple_A-Z_Fruit1.jpg'},
    {text: 'Banana', cols: 1, rows: 2, color: 'lightblue', image: 'https://res.cloudinary.com/du3klmijx/image/upload/v1554304257/Banana_A-Z_Fruit4.jpg'},
    {text: 'Orange', cols: 1, rows: 2, color: 'lightblue', image: 'https://res.cloudinary.com/du3klmijx/image/upload/v1554304273/Orange_A-Z_Fruit19.jpg'},
    {text: 'Pineapple', cols: 1, rows: 2, color: 'lightblue', image: 'https://res.cloudinary.com/du3klmijx/image/upload/v1554304288/Pineapple_A-Z_Fruit21.jpg'},
  ];
}
