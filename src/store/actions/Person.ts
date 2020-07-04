import * as types from './ActionTypes';
import { Person } from 'Interfaces';

export interface IPersonAction {
    type: string,
    dicty?: Person,
    dictys?: Person[],
}

export const addPerson = (dicty: Person):IPersonAction => ({ type: types.ADD_PERSON, dicty });
export const loadPersons = (dictys: Person[]):IPersonAction => ({ type: types.LOAD_PERSON, dictys });
