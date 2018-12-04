import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FilmeServiceProvider } from '../../providers/filmes/filme-service';

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    FilmeServiceProvider

  ]
})
export class FilmesPage {
  public objeto_feed = {
    qntd_likes: 12,
    qntd_comments: 4,

  }

  public tap: number = 0;

  public lista_filmes = new Array<any>();
  public page = 1;

  public nome_usuario: string = "Primola Helena";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private filmeProvider: FilmeServiceProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();

  }

  ionViewDidEnter() {
    this.carregarFilmes();

  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push('FilmeDetalhesPage', { id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false) {
    this.abreCarregando();

    this.filmeProvider.getLatestMovie(this.page).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          console.log(this.page);
          console.log(this.lista_filmes);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = objeto_retorno.results;
        }

        this.fechaCarregando();
        if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
        }
    }, error => {
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
        }
    }
  )
}

tapEvent(e) {
  this.tap++
}

}