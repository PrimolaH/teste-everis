import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

/*
  Generated class for the HeroService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroService {
  data: any;
  dataDescri: any;
  constructor(public http: Http) {
  }

  buscarLista() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      console.log("Chama todos os herois!");
      
      var timestamp = Number(new Date());
      var hash = Md5.hashStr(timestamp + '02f0f7ea74e1d583c0f43291feed75af802d8565f6158126984f9484bff77ec2be955df5');

      this.http.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=f6158126984f9484bff77ec2be955df5&hash=${hash}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  buscaDesdricao(id: number) {
    return new Promise(resolve => {

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(timestamp + '02f0f7ea74e1d583c0f43291feed75af802d8565f6158126984f9484bff77ec2be955df5');

      this.http
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${timestamp}&orderBy=name&limit=20&apikey=f6158126984f9484bff77ec2be955df5&hash=${hash}`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.dataDescri = data;
          resolve(this.dataDescri);
        });
    });
  }

}