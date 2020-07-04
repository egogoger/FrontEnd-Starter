import { ADD_PERSON, LOAD_PERSON } from 'Actions/ActionTypes';
import { Person } from 'Interfaces';
import { IPersonAction } from 'Actions/Person';

type StateType = Person[];
const initialState: StateType = [];

function personsReducer(state: StateType = initialState, action: IPersonAction): StateType {
    let newState = [...state];

    switch (action.type) {
    case ADD_PERSON:
        newState.push(action.person);
        break;
    case LOAD_PERSON:
        newState = action.persons;
        break;
    }

    return newState;
}

export default personsReducer;
