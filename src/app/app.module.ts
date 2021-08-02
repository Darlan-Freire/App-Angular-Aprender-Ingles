import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './modals/success/success.component';
import { FailureComponent } from './modals/failure/failure.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  providers: [
		BsModalService
  ],
  entryComponents:[
    SuccessComponent,
    FailureComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }