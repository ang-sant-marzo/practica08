import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

  @Input() jugadoresLocales: any;
  @Input() jugadoresVisitantes: any;
  jugadores: any = [];

  constructor() { }

  ngOnInit(): void {
    this.jugadores = [...this.jugadoresLocales, ...this.jugadoresVisitantes];
  }

  ngAfterViewChecked() {
    this.jugadores.sort((a: any, b: any) => {
      return (b.puntos - a.puntos);
    })
  }

}
