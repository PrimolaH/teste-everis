import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { HeroService } from '../../providers/heroes/hero-service';
import { HeroModel } from '../../models/hero-model';


@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  public id;
  public obj: any;
  public hero: HeroModel;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public heroService: HeroService, private socialSharing: SocialSharing) {
    this.id = navParams.get("id");
    
    this.hero = new HeroModel();
    this.heroService.buscaDesdricao(this.id)
    .then(data => {
      this.obj = data;
      console.log(this.obj);
      this.hero.name = this.obj.data.results[0].name; 
      this.hero.thumb = this.obj.data.results[0].thumbnail.path +"."+ this.obj.data.results[0].thumbnail.extension;
      this.hero.description =  this.obj.data.results[0].description;

      console.log(this.hero);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

  eventShare(){

    // Share via email
    this.socialSharing.share(this.hero.name, this.hero.thumb, this.hero.description).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
}
