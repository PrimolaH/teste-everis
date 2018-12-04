//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.  getLatestMovies(): any {
    throw new Error("Method not implemented.");
  }

*/
@Injectable()
export class FilmeServiceProvider {
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
  }
  getLatestMovie(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());

  }
  getMovieDetails(filmeid){
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.getApiKey());
}

  getApiKey(): string{

    return "d24408c5ad491d0f9f50d95fcca53b0f";
  }
}
