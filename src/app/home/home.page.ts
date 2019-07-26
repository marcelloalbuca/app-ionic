import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public frase = 'Boa noite!!';
  public paragrafo = 'Que esta seja uma ótima  finalização de curso.';
  public lista: Array<string> = [
    'A Mair liberdade é ser livre de nossa própia mente.',
    'O silêncio também fala, fala e muito! O silêncio pode falar mesmo quando as palavras falham.',
    'Você pode sobreviver, mas sobrevivência não é vida.',
    'Em si, a vida é neutra. Nós a fazemos bela, nós a fazemos feia; a vida é a energia que trazemos a ela.',
    'Opte pelo que faz o seu coração vibrar. Opte pelo que gostaria de fazer, apesar de todas as consequências.'
  ];

  public conteudo;

  getMenssage(){
    let position = Math.floor(Math.random() * (4 - 0)) + 0;
    this.conteudo = this.lista[position];
  }

  constructor() {
    this.getMenssage();

  }


}
