import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducers';
import { multiplicarAction, dividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  public contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  public multiplcar(): void {
    const action = new multiplicarAction(this.contador);
    this.store.dispatch(action);
  }

  public dividir(): void {
    const action = new dividirAction(this.contador);
    this.store.dispatch(action);
  }
}
