import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  
  public array_coracoes: Array<Coracao> = []
  @Input() public numeroDeCoracoes = 0
  public index = 0

  constructor() {}

  public trocaCoracoes(valor: boolean): void {
    this.array_coracoes[this.index].cheio = valor
    this.index += 1
  }

   public inicializaCoracoes(numeroDeCoracoes: number) {
     for(let i = 0; i < numeroDeCoracoes; i++){
       this.array_coracoes.push(new Coracao(true))
      }
   }

   ngOnChanges(): void {
     if(this.array_coracoes.length === 0){
       this.inicializaCoracoes(this.numeroDeCoracoes)
      } else {
        if(this.numeroDeCoracoes !== this.array_coracoes.length) {
         this.trocaCoracoes(false)
        }
     }
   }
   
  ngOnInit(): void {
  }
}