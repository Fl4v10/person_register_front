export class AddressModel {
    id: number;
    name: string;
    number: Number;
    complement: string;

    constructor(p: any) {
        this.id = p.id ? p.id : 0;
        this.name = p.name ? p.name : '';
        this.number = p.number ? p.number.toInt32(0) : 0;
        this.complement = p.complement ? p.complement : '';
    }
}
