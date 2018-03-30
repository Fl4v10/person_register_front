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
        this.id = p.Id ? p.Id : 0;
        this.age = p.BirthDate ? this.CalculateAge(p.BirthDate) : null;
        this.birthDate = p.BirthDate ? p.BirthDate : null;
        this.name = p.Name ? p.Name : '';
        this.identificationDocument = p.IdentificationDocument ? p.IdentificationDocument : '';
        this.gender = p.Gender ? p.Gender : null;
        this.address = p.Address ? p.Address : new AddressModel({});
    }

    CalculateAge(bday): number {
        const timeDiff = Math.abs(Date.now() - bday);
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
}
