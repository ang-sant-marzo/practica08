import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteEnLineaComponent } from './componente-en-linea/componente-en-linea.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { MarcadorComponent } from './marcador/marcador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteEnLineaComponent,
    AutenticacionComponent,
    MarcadorComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
