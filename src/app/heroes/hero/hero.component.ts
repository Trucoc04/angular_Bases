import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironMan';
  public age:number = 33;

get capitalizedName():string{
  return this.name.toUpperCase();
}

  GetHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name='Spiderman';

  }

  changeAge():void{
    this.age= 55;

  }

  ResetForm():void{
    this.name = 'ironMan';
    this.age = 33
  }
}
