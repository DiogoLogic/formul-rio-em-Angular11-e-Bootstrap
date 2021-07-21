import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadoComponent } from './components/opcoes/resultado/resultado.component';



import { HomeComponent } from './components/home/home.component';
import { OpcoesComponent } from './components/opcoes/opcoes.component';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData} from'@angular/common';



registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    OpcoesComponent,
    ResultadoComponent,
   
       
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue:'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
