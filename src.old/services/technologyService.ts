import { Service } from './baseService';
import { Technology } from '../models/technology';

export class TechnologyService extends Service
{
    constructor() {
        super();
    }

    getData(): Promise<Technology[]> {        
        return Promise.resolve(this.jsonData.technology);
    }
}