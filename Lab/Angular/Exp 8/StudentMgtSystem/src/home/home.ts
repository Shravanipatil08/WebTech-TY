import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name:string = "Atharv Niprul"
  age:number = 20
  course:string = "CSE AI/ML"
  imagePath:string = "bmw.avif"
  cities:string[] = ["Pune","Mumbai","Kolhapur","Ichalkaranji"]

  changeName = () => {
    this.name = "Atharv"
  }

  toggleImage = () => {
    this.imagePath = this.imagePath === "defender.jpg"?"bmw.avif":"defender.jpg"
  }
}
