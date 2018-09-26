export class Environments {
    constructor(public isProduction = false, public isWAC = false){
    }
}

export const environment = new Environments()

environment.isProduction = true
