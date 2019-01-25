import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { CustomerRegisterComponent } from "./components/customer-register/customer-register.component";

const routes: Routes = [
    {
        path: 'home', component: IndexComponent, children: [
            {
                path: 'register', component: CustomerRegisterComponent,                
            },
            {
                path: 'register/:key', component: CustomerRegisterComponent
            }
        ] 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRegistrationRoutingModule {}