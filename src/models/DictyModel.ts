import { Dicty, Word } from 'Interfaces';
import { CONST } from 'Constants';

const dictysModelSymbol = Symbol('Model for dictys');
const dictysModelEnforcer = Symbol('The only object that can create DictysModel');

class DictyModel {
    private dictys: Map<string, Dicty>;

    constructor(enforcer: symbol) {
        if (enforcer !== dictysModelEnforcer) {
            throw 'Instantiation failed: use DictysModel.instance instead of new()';
        }

        this.dictys = new Map();
        if (localStorage.getItem(CONST.LocalStorage.Dictys)) {
            JSON.parse(localStorage.getItem(CONST.LocalStorage.Dictys)).map(item => {
                this.dictys.set(item.title, item);
            });
        }
    }

    static get instance(): DictyModel {
        if (!this[dictysModelSymbol])
            this[dictysModelSymbol] = new DictyModel(dictysModelEnforcer);
        return this[dictysModelSymbol];
    }

    static set instance(v: DictyModel) {
        throw 'Can\'t change constant property!';
    }

    /**************************************
                    Dicty
     *************************************/

    public async createDicty(dicty: Dicty): Promise<void> {
        this.dictys.set(dicty.title, dicty);
        this.saveDictys();
    }

    public async removeDicty(title: string): Promise<void> {
        this.dictys.delete(title);
        this.saveDictys();
    }

    public async loadDictys(): Promise<void> {
        const oldDictys: Dicty[] = [];
        if (localStorage.getItem(CONST.LocalStorage.Dictys)) {
            oldDictys.push(JSON.parse(localStorage.getItem(CONST.LocalStorage.Dictys)));
        }

        this.dictys.clear();
        oldDictys.forEach(dicty => {
            this.dictys.set(dicty.title, dicty);
        });
    }

    public checkTitle(title: string): boolean {
        return this.dictys.has(title);
    }

    private saveDictys() {
        localStorage.setItem(CONST.LocalStorage.Dictys, JSON.stringify(Array.from(this.dictys.values())));
    }

    public getDictys(): Dicty[] {
        return Array.from(this.dictys.values());
    }

    /**************************************
                    Words
     *************************************/

    public addWord(word: Word, dicty: string): void {
        this.dictys.get(dicty).words.push(word);
        this.saveDictys();
    }

    public removeWord(word: Word, dicty: string): void {
        this.dictys.get(dicty).words = this.dictys.get(dicty).words.filter(oldWord => oldWord !== word);
        this.saveDictys();
    }
}

export default DictyModel;
