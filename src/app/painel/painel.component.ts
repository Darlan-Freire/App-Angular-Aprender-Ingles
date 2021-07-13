import { Component } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { frases_array } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frase[] = frases_array //Array que contém frases ENG e PTBR
  public instrucao: String = 'Traduza a frase:'
  public respostaUsuario: String = ''

  public atualizaResposta(event: any): void {
    this.respostaUsuario = event.target.value
  }
  
}


