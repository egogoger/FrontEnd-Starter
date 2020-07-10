import {Person} from 'Interfaces';
import {CONST} from 'Constants';

const personModelSymbol = Symbol('Model for person');
const personModelEnforcer = Symbol('The only object that can create PersonModel');

class PersonModel {
    constructor(enforcer: symbol) {
        if (enforcer !== personModelEnforcer) {
            throw 'Instantiation failed: use PersonsModel.instance instead of new()';
        }
    }

    static get instance(): PersonModel {
        if (!this[personModelSymbol])
            this[personModelSymbol] = new PersonModel(personModelEnforcer);
        return this[personModelSymbol];
    }

    static set instance(v: PersonModel) {
        throw 'Can\'t change constant property!';
    }

    /**************************************
                    Person
     *************************************/

    public async savePersons(): Promise<void> {
        // localStorage.setItem(
        //     CONST.LOCAL_STORAGE.PERSONS,
            // JSON.stringify(store.getState().persons));
    }

    public async deleteAllPersons(): Promise<void> {
        localStorage.removeItem(CONST.LOCAL_STORAGE.PERSONS);
    }

    public async loadPersons(): Promise<Person[]> {
        try {
            const persons = JSON.parse(localStorage.getItem(CONST.LOCAL_STORAGE.PERSONS));
            if (persons === null) {
                return [];
            } else {
                return persons;
            }
        }
        catch (e) {
            return [];
        }
    }
}

export default PersonModel;
