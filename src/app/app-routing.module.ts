import { NovoClienteComponent } from './components/novoCliente/novoCliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdemServicoComponent } from './components/ordemServico/ordemServico.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NovoUsuarioComponent } from './components/novoUsuario/novoUsuario.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { CadastrosComponent } from './components/cadastros/cadastros.component';



const routes: Routes = [
  { path: 'ordemservico', component: OrdemServicoComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'novoCliente', component: NovoClienteComponent},
  { path: 'novoUsuario', component: NovoUsuarioComponent},
  { path: 'pesquisa', component: PesquisaComponent},
  { path: 'cadastro', component: CadastrosComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
