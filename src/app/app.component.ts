import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tituloForm: string = 'Inicie sesión';
  textoBoton: string = 'Enviar';
  login: boolean = true;

  changeForm() {
    this.login = !this.login;
    if (this.login) {
      this.tituloForm = 'Inicie sesión';
      this.textoBoton = 'Enviar';
    } else {
      this.tituloForm = 'Crear usuario';
      this.textoBoton = 'Añadir';
    }
  }

}
