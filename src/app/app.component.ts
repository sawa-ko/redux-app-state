import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementarAction, decrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(state => this.contador = state)
  }

  public incrementar(): void {
    const action = new incrementarAction();
    this.store.dispatch(action);
  }

  public decrementar(): void {
    const action = new decrementarAction();
    this.store.dispatch(action);
  }
}
