import { NgModule } from "@angular/core";
import { CustomerRegistrationRoutingModule } from "./customer-registration-routing.module";
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { IndexComponent } from "./pages/index/index.component";
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from "@angular/common";
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { CustomerService } from "./services/customer.service";
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

const COMPONENTS = [
    IndexComponent,
    CustomerRegisterComponent
];

const SERVICES = [
    CustomerService
]

@NgModule({
    exports: [],
    imports: [
        CustomerRegistrationRoutingModule,
        ToolbarModule,
        SplitButtonModule,
        InputTextModule,
        CommonModule,
        PanelModule,
        FormsModule,
        ReactiveFormsModule,
        FieldsetModule,
        InputMaskModule,
        DialogModule,
        MessageModule,
        MessagesModule
    ],
    declarations: [...COMPONENTS],
    providers: [...SERVICES]
})
export class CustomerRegistrationModule { }