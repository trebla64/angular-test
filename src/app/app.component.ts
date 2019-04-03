import { Component } from '@angular/core';

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
    {text: 'One', cols: 1, rows: 2, color: 'lightblue', image: 'https://res.cloudinary.com/du3klmijx/image/upload/c_scale,h_350/v1554304241/Apple_A-Z_Fruit1.jpg'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', image: 'https://res.cloudinary.com/du3klmijx/image/upload/c_scale,h_350/v1554304257/Banana_A-Z_Fruit4.jpg'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink', image: 'https://res.cloudinary.com/du3klmijx/image/upload/c_scale,h_350/v1554304273/Orange_A-Z_Fruit19.jpg'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1', image: 'https://res.cloudinary.com/du3klmijx/image/upload/c_scale,h_350/v1554304288/Pineapple_A-Z_Fruit21.jpg'},
  ];
}
