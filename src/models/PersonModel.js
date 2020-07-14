import {CONST} from 'Constants';

const personModelSymbol = Symbol('Model for person');
const personModelEnforcer = Symbol('The only object that can create PersonModel');

class PersonModel {
    persons;

    constructor(enforcer) {
        if (enforcer !== personModelEnforcer) {
            throw 'Instantiation failed: use PersonsModel.instance instead of new()';
        }
        this.persons = [];
        this.loadPersons();
    }

    static get instance() {
        if (!this[personModelSymbol])
            this[personModelSymbol] = new PersonModel(personModelEnforcer);
        return this[personModelSymbol];
    }

    static set instance(v) {
        throw 'Can\'t change constant property!';
    }

    /**************************************
                    Person
     *************************************/

    async savePerson(person) {
        this.persons.push(person);
        this.saveAll();
    }

    async deletePerson(person) {
        this.persons = this.persons.filter(p => !PersonModel.personsEqual(p, person));
        this.saveAll();
    }

    saveAll() {
        localStorage.setItem(
            CONST.LOCAL_STORAGE.PERSONS,
            JSON.stringify(this.persons));
    }

    async deleteAllPersons() {
        this.persons = [];
        this.saveAll();
    }

    async loadPersons() {
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

    static personsEqual(p1, p2) {
        return p1.name === p2.name && p1.surname === p2.surname;
    }
}

export default PersonModel;
