import { Service } from './baseService';
import { Crew } from '../models/crew';

export class CrewService extends Service
{
    constructor() {
        super();
    }

    getData(): Promise<Crew[]> {        
        return Promise.resolve(this.jsonData.crew);
    }
}