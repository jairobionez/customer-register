import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.entity";
import { Subject } from "rxjs";

@Injectable()
export class CustomerService {

    customers: Customer[] = [];

    id: number = 2;

    private customerEdit = new Subject<Customer>();

    customerEdit$ = this.customerEdit.asObservable();

    constructor() {
        this.customers.push({
			id: 1,
			name: 'Jairo',
			lastName: 'Bionez',
			type: 'Física',
			gr: '5555555-3',
			phoneNumber: '99999999999',
			address: {
				city: 'Madagascar',
				neighborhood: 'Zoobomafoo',
				state: 'Disney',
				street: 'Chris and Mart',
				zipCode: '44444444'
			}
		},
			{
				id: 2,
				name: 'Lucas',
				lastName: 'Fiuza',
				type: 'Física',
				gr: '5555555-3',
				phoneNumber: '99999999999',
				address: {
					city: 'States Uniteds',
					neighborhood: 'Zoobomafoo',
					state: 'Disney',
					street: 'Chris and Mart',
					zipCode: '44444444'
				}
		})    
    }

    saveCustomer(customer: Customer){
        this.customers.push(customer);        
    }
    
    editCustomer(customer: Customer){
        this.customerEdit.next(customer);        
    }

    deleteCustomer(id: number){
        let index = this.customers.findIndex(s => s.id == id)
        this.customers.splice(index, 1);
    }

    updateCustomer(customer: Customer){
        let index = this.customers.findIndex(s => s.id == customer.id)
        this.customers[index] = customer;
    }

}