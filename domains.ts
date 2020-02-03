




class Client{
    constructor(private _nom:string, private _prenoms :string){
        this._nom = _nom;
        this._prenoms= _prenoms;
        
    }
 
    toString(){
        return `Client [nom : ${this._nom} / prénom : ${this._prenoms}]`
    }
}
export {Client};