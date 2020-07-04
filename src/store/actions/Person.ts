import * as types from './ActionTypes';
import { Person } from 'Interfaces';

export type IPersonAction = {
    type: string,
    person?: Person,
    persons?: Person[],
}

export const addPerson = (person: Person):IPersonAction => ({ type: types.ADD_PERSON, person });
export const removePerson = (person: Person):IPersonAction => ({ type: types.REMOVE_PERSON, person });
export const loadPersons = (persons: Person[]):IPersonAction => ({ type: types.LOAD_PERSONS, persons });
export const clearPersons = ():IPersonAction => ({ type: types.CLEAR_PERSONS });
