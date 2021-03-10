import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEnLineaComponent,
    AutenticacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
