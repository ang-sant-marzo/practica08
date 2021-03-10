import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  @Input() jugadores: any;
  @Input() equipo: string;
  @Output() canasta: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setCanasta(puntos: number, nombre: string) {
    this.canasta.emit({
      puntos: puntos,
      nombre: nombre
    })
  }

}
