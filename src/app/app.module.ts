import { CadastrosComponent } from './components/cadastros/cadastros.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdemServicoComponent } from './components/ordemServico/ordemServico.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NovoClienteComponent } from './components/novoCliente/novoCliente.component';
import { NovoUsuarioComponent } from './components/novoUsuario/novoUsuario.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdemServicoComponent,
    NavComponent,
    DashboardComponent,
    NovoClienteComponent,
    NovoUsuarioComponent,
    PesquisaComponent,
    CadastrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
