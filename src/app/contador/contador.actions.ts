import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const REINICIAR = '[Contador] Reiniciar';

export class incrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class decrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class multiplicarAction implements Action {
    readonly type = MULTIPLICAR;
    constructor(public payload: number) { }
}

export class dividirAction implements Action {
    readonly type = DIVIDIR;
    constructor(public payload: number) { }
}

export class reiniciarAction implements Action {
    readonly type = REINICIAR;
}

export type actions = incrementarAction | decrementarAction | multiplicarAction | dividirAction | reiniciarAction;