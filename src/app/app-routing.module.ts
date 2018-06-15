import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BeerdetailComponent} from "./components/beerdetail/beerdetail.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AddBeerComponent} from "./components/add-beer/add-beer.component";
import {EditBeerComponent} from "./components/edit-beer/edit-beer.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'beer/add', component: AddBeerComponent},
    {path: 'beer/:id', component: BeerdetailComponent},
    {path: 'beer/edit/:id', component: EditBeerComponent},
]

@NgModule({
    exports: [RouterModule],
  imports: [
      RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
