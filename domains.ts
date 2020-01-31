import * as serv from './service';




class Client{
    constructor(private _nom:string, private _prenoms :string){
        this._nom = _nom;
        this._prenoms= _prenoms;
        
    }
    get nom(){
        return this._nom;
    }
    get prenoms(){
        return this._prenoms;
    }
    set nom(newNom){
        this._nom = newNom;
    }
    set prenoms(newPrenoms){
        this._prenoms = newPrenoms;
    }
    toString(){
        return `Client [nom : ${this._nom} / prénom : ${this._prenoms}]`
    }
}
export {Client};