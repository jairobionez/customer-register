import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { map, delay, finalize, tap } from 'rxjs/operators';
import { Customer } from '../../models/customer.entity';
import { Message } from 'primeng/components/common/message';
import { of } from 'rxjs';

@Component({
	selector: 'customer-register',
	templateUrl: './customer-register.component.html',
	styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {
	idCustomer: number = 0;

	form: FormGroup;

	msgs: Message[] = [];

	teste: any;

	constructor(private activateRoute: ActivatedRoute
		, private fb: FormBuilder
		, private router: Router
		, private _customerService: CustomerService
	) {
		this.createForm();		
	}

	ngOnInit() {
		this.getKeyInUrl();

		this._customerService.customerEdit$.pipe(
			map((data: Customer) => data)
		).subscribe(response => {
			this.form.setValue(response);
		});
	}

	getKeyInUrl() {
		this.activateRoute.params.subscribe(response => {
			if (!response['key']) return;

			this.idCustomer = response['key'];
		});
	}

	createForm() {
		this.form = this.fb.group({
			id: 0,
			name: [null, Validators.required],
			lastName: [null, Validators.required],
			type: [null, Validators.required],
			gr: [null, Validators.required],
			phoneNumber: null,
			address: this.fb.group({
				city: [null, Validators.required],
				state: [null, Validators.required],
				street: null,
				neighborhood: null,
				zipCode: [null, Validators.required]
			})
		});
	}

	save(value) {
		if(!this.formValidation()) return;

		this.form.value.id = ++this._customerService.id;
		this._customerService.saveCustomer(this.form.value);
		this.router.navigateByUrl('home');
	}

	update() {
		if(!this.formValidation()) return;

		this._customerService.updateCustomer(this.form.value);
		this.router.navigateByUrl('home');
	}

	delete() {
		this._customerService.deleteCustomer(this.idCustomer);
		this.router.navigateByUrl('home');

	}

	cancel() {
		this.router.navigateByUrl('home');
	}

	formValidation(): boolean{
		if (!this.form.valid) {
			of(
				this.msgs.push({
					severity: 'warn'
					, summary: 'Formulário inválido'
					, detail: 'Verifique se todos os campos foram preenchidos'
				})
			).pipe(				
				delay(4000)			
			).subscribe(response => {
				this.msgs = [];
			});

			return false;
		}else{
			return true;
		}
	}

	clear() {
		this.form.reset();
	}
}
