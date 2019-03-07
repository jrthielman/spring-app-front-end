import { Address } from './Address';

export class UserDetailsRequestModel{
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    private addresses: Address[];

    public setAddresses(addresses: Address[]){
        this.addresses = addresses;
    }

    public getAddresses(){
        return this.addresses;
    }
}