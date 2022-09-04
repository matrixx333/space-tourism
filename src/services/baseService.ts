import jsonData from '../../data.json'

export abstract class Service 
{
    jsonData;

    constructor() {
        this.jsonData = jsonData;
    }

    abstract getData(): Promise<any[]>;
}