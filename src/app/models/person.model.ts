import { AddressModel } from './address.model';

export class PersonModel {
    id: number;
    birthDate: string;
    age: number;
    name: string;
    identificationDocument: string;
    gender: boolean;
    address: AddressModel;

    constructor(p: any) {
        this.id = p.id ? p.id : 0;
        this.age = p.birthDate ? this.CalculateAge(p.birthDate) : null;
        this.birthDate = p.birthDate ? p.birthDate : null;
        this.name = p.name ? p.name : '';
        this.identificationDocument = p.identificationDocument ? p.identificationDocument : '';
        this.gender = p.gender ? p.gender : null;
        this.address = p.address ? p.address : new AddressModel({});
    }

    CalculateAge(bday): number {
        const timeDiff = Math.abs(Date.now() - bday);
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
}
