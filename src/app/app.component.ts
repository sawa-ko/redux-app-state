import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contador: number;

  constructor() {
    this.contador = 10;
  }

  public incrementar(): void {
    this.contador++;
  }

  public decrementar(): void {
    this.contador--;
  }
}
