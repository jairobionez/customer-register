import { Address } from "./address.entity";

export class Customer{
    /**
     * @property {id} - Representa o id do cliente
     */
    id: number;

    /**
     * @property {name} - Representa o nome do cliente
     */
    name: string;

    /**
     * @property {lastName} - Representa o sobrenome do cliente
     */
    lastName: string;

    /**
     * @property {type} - Representa o tipo do cliente (Física ou Jurídica)
     */
    type: string;

    /**
     * @property {gr} - Representa o registro geral do cliente
     */
    gr: string;

    /**
     * @property {phoneNumber} - Representa o número de telefone do cliente
     */
    phoneNumber: string;

    /**
     * @property {address} - Representa o endereço do cliente
     */
    address: Address;
    
    constructor(
        name: string,
        lastName: string,
        type: string,
        gr: string,
        phoneNumber: string,
        address: Address
    ) {  
        this.name = name;
        this.lastName = lastName;
        this.type = type;
        this.gr = gr;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}