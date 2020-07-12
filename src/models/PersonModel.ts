import {Person} from 'Interfaces';
import {CONST} from 'Constants';

const personModelSymbol = Symbol('Model for person');
const personModelEnforcer = Symbol('The only object that can create PersonModel');

class PersonModel {
    persons: Person[];

    constructor(enforcer: symbol) {
        if (enforcer !== personModelEnforcer) {
            throw 'Instantiation failed: use PersonsModel.instance instead of new()';
        }
        this.persons = [];
        this.loadPersons();
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

    public async savePerson(person: Person): Promise<void> {
        this.persons.push(person);
        this.saveAll();
    }

    public async deletePerson(person: Person): Promise<void> {
        this.persons = this.persons.filter(p => !PersonModel.personsEqual(p, person));
        this.saveAll();
    }

    private saveAll() {
        localStorage.setItem(
            CONST.LOCAL_STORAGE.PERSONS,
            JSON.stringify(this.persons));
    }

    public async deleteAllPersons(): Promise<void> {
        this.persons = [];
        this.saveAll();
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

    static personsEqual(p1: Person, p2: Person): boolean {
        return p1.name === p2.name && p1.surname === p2.surname;
    }
}

export default PersonModel;
