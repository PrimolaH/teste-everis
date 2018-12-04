import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HeroService } from '../../providers/heroes/hero-service';
/**
 * Generated class for the HeroesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {

  public obj: any;
  public heroes: any;
  
  constructor(public navCtrl: NavController, public heroService: HeroService) {
    
  }

  ionViewDidLoad() {
    console.log('CARREGANDO PAGINA');
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.heroService.buscarLista()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });

      // console.log(JSON.stringify(this.heroes));
  }

  getDescription(id:number){
    console.log(id);
    this.navCtrl.push('DescriptionPage', {id: id})
  }

}
