import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //interpolation
  fname : String="Shravani";
  myRoll:Number=317;
  course:String="WEB";
  imageURL:String="https://google.com";
  
  showButton()
  {
    this.fname="Shravuuuuuuuuuuu";
    alert("Message Displayed !");
  }
  heroes: string[] = ['Iron Man', 'Thor', 'Hulk', 'Spider-Man'];

}

