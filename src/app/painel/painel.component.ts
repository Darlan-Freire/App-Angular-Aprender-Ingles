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
  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  constructor() {
    
    this.rodadaFrase = this.frases[this.rodada]

  }

  // public atualizaResposta(event: any): void {
  //   this.respostaUsuario = event.target.value
  // }
  
  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.respostaUsuario.toLowerCase()){
      this.rodada++ //Troca pergunta da rodada
      this.progresso += (100 / this.frases.length) //Porcentagem do progresso
      this.rodadaFrase = this.frases[this.rodada] //Atualiza objeto rodadaFrase
      this.limparTextarea()
    } else {
      console.log("ERRADO")
      
    }

  }
  public limparTextarea() {
    this.respostaUsuario = ''
    const textarea= document.getElementById( "textarea" )
    textarea?.focus
  }
}