import { AddressModel } from './address.model';

export class PersonModel {
    Id: number;
    BirthDate: Date;
    Age: number;
    Name: string;
    IdentificationDocument: string;
    Gender: boolean;
    Address: AddressModel;

    constructor(p: any) {
        this.Id = p.Id ? p.Id : 0;
        this.Age = p.BirthDate ? this.CalculateAge(p.BirthDate) : null;
        this.BirthDate = p.BirthDate ? p.BirthDate : null;
        this.Name = p.Name ? p.Name : '';
        this.IdentificationDocument = p.IdentificationDocument ? p.IdentificationDocument : '';
        this.Gender = p.Gender ? p.Gender : null;
        this.Address = p.Address ? p.Address : new AddressModel({});
    }

    CalculateAge(bday): number {
        const timeDiff = Math.abs(Date.now() - bday);
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
}
