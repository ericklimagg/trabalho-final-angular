import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Módulo para chamadas HTTP

import { AppRoutingModule } from './app-routing-module';

// Importa todos os componentes da aplicação
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  // Declara os componentes que pertencem a este módulo
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent
  ],
  // Importa outros módulos que a aplicação precisa para funcionar
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Importa o módulo HTTP
  ],
  providers: [],
  bootstrap: [AppComponent] // Define o componente inicial
})
export class AppModule { }