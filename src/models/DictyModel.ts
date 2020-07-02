import {Dicty, Word} from "Interfaces";
import {Const} from "Constants";

let dictysModelSymbol = Symbol('Model for dictys');
let dictysModelEnforcer = Symbol('The only object that can create DictysModel');

class DictyModel {
    private dictys: Map<string, Dicty>;

    constructor(enforcer) {
        if (enforcer !== dictysModelEnforcer) {
            throw 'Instantiation failed: use DictysModel.instance instead of new()';
        }

        this.dictys = new Map();
        if (localStorage.getItem(Const.LocalStorage.Dictys)) {
            JSON.parse(localStorage.getItem(Const.LocalStorage.Dictys)).map(item => {
                this.dictys.set(item.title, item);
            });
        }
    }

    static get instance(): DictyModel {
        if (!this[dictysModelSymbol])
            this[dictysModelSymbol] = new DictyModel(dictysModelEnforcer);
        return this[dictysModelSymbol];
    }

    static set instance(v) {
        throw 'Can\'t change constant property!';
    }

    /**************************************
                    Dicty
     *************************************/

    public async createDicty(dicty: Dicty) {
        this.dictys.set(dicty.title, dicty);
        this.saveDictys();
    }

    public async removeDicty(title: string) {
        this.dictys.delete(title);
        this.saveDictys();
    }

    public async loadDictys() {
        let oldDictys: Dicty[] = [];
        if (localStorage.getItem(Const.LocalStorage.Dictys)) {
            oldDictys.push(JSON.parse(localStorage.getItem(Const.LocalStorage.Dictys)));
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
        localStorage.setItem(Const.LocalStorage.Dictys, JSON.stringify(Array.from(this.dictys.values())));
    }

    public getDictys(): Dicty[] {
        return Array.from(this.dictys.values());
    }

    /**************************************
                    Words
     *************************************/

    public addWord(word: Word, dicty: string) {
        this.dictys.get(dicty).words.push(word);
        this.saveDictys();
    }

    public removeWord(word: Word, dicty: string) {
        this.dictys.get(dicty).words = this.dictys.get(dicty).words.filter(oldWord => oldWord !== word);
        this.saveDictys();
    }
}

export default DictyModel;
