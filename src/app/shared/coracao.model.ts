export class Coracao {
  
  public cheio: boolean = false
  public URL_Coracao_Cheio: string = "/assets/coracao_cheio.png"
  public URL_Coracao_Vazio: string = "/assets/coracao_vazio.png"

  constructor(cheio: boolean){
    this.cheio = cheio
  }

  public exibeCoracao() {
    if(this.cheio) {
      return this.URL_Coracao_Cheio
    } else {
      return this.URL_Coracao_Vazio
    }
  }

}