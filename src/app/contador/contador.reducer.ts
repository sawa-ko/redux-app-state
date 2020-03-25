// import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, actions, REINICIAR } from './contador.actions';
import * as contador from './contador.actions'

export function contadorReducer(state: number = 10, action: contador.actions) {
    switch (action.type) {
        case contador.INCREMENTAR:
            return state + 1;
        case contador.DECREMENTAR:
            return state - 1;
        case contador.MULTIPLICAR:
            return state * action.payload;
        case contador.DIVIDIR:
            return state / action.payload;
        case contador.REINICIAR:
            return state = 0;
        default:
            return state;
    }
}