import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
