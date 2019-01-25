import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.entity';
import { CustomerService } from '../../services/customer.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
	selector: 'index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	customers: Customer[] = [];

	constructor(private router: Router
		, private _customerService: CustomerService) { }

	ngOnInit() {
		this.customers = this._customerService.customers;
	}

	register() {
		this.router.navigateByUrl('home/register')
	}

	editCustomer(customer: Customer) {
		of(this.router.navigateByUrl('home/register/' + customer.id))
		.pipe(
			delay(50)
		).subscribe(response => {
			this._customerService.editCustomer(customer);
		});
	}

	searchCustomer(value: string) {
		if (value) {
			this.customers = this._customerService.customers.filter(c =>
				c.name.match(value)
			);
		} else {
			this.customers  = this._customerService.customers;
		}
	}
}
