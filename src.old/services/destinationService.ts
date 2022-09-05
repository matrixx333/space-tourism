import { Service } from './baseService';
import { Destination } from '../models/destination';

export class DestinationService extends Service
{
    constructor() {
        super();
    }

    getData(): Promise<Destination[]> {        
        return Promise.resolve(this.jsonData.destinations);
    }
}