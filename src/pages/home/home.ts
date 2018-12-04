import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { HeroesPage } from '../heroes/heroes';
//import { FilmesPage } from '../filmes/filmes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //heroes = HeroesPage;

  constructor(public navCtrl: NavController) {
    
  }

  getHeroes(){
    this.navCtrl.push('HeroesPage');
  }

  getFilmes(){
    this.navCtrl.push('FilmesPage');
  }
}