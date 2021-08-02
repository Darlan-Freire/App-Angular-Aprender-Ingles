import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio: String = "/assets/coracao_cheio.png"
  public coracaoVazio: String = "/assets/coracao_vazio.png"
  public array_Coracoes: Array<String> = []
  public numeroDeCoracoes_Global: number = 3
  public indexCoracaoAtual_Global: number = (this.numeroDeCoracoes_Global) -1
  public errou: boolean = false

  constructor() {
    this.inicializaCoracoes(this.numeroDeCoracoes_Global)
   }

   public trocaCoracoes(errou: boolean) {
     if(errou == true) {
      this.array_Coracoes[this.indexCoracaoAtual_Global] = this.coracaoVazio
      this.indexCoracaoAtual_Global--
     }     
   }

   public inicializaCoracoes(numeroDeCoracoes: number) {
     for(let i = 0; i < numeroDeCoracoes; i++){
       this.array_Coracoes.push(this.coracaoCheio)
     }
   }

  ngOnInit(): void {
  }

  

}