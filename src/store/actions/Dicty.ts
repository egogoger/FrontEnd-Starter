import * as types from './ActionTypes';
import { Dicty } from 'Interfaces';

export interface IDictyAction {
    type: string,
    dicty?: Dicty,
    dictys?: Dicty[],
}

export const addDicty = (dicty: Dicty):IDictyAction => ({ type: types.ADD_DICTY, dicty });
export const loadDictys = (dictys: Dicty[]):IDictyAction => ({ type: types.LOAD_DICTYS, dictys });
