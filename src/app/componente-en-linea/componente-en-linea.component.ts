import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
      <div class="card m">
        <h1>Ejemplo de componente en línea</h1>
        <hr>
        <p>Hola Mundo</p>
      </div>
  `,
  styles: [
    'p {color: violet}',
    'h1 {color: blue}'
  ]
})
export class ComponenteEnLineaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
