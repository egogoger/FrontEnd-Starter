import * as types from './ActionTypes';
import { Person } from 'Interfaces';

export interface IPersonAction {
    type: string,
    person?: Person,
    persons?: Person[],
}

export const addPerson = (person: Person):IPersonAction => ({ type: types.ADD_PERSON, person });
export const loadPersons = (persons: Person[]):IPersonAction => ({ type: types.LOAD_PERSON, persons });
