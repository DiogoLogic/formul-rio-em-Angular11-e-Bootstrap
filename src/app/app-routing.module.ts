import { ResultadoComponent } from './components/opcoes/resultado/resultado.component';



import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OpcoesComponent } from './components/opcoes/opcoes.component';




const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Page01",
    component: OpcoesComponent
  },
  {
    path: "Resultado",
    component: ResultadoComponent
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
