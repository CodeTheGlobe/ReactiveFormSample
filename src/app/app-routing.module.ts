import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEmployeesComponent} from './employee/list-employees.component'
import {CreateEmployeeComponent} from './employee/create-employee.component'
import {UserLoginComponent} from './login/user-login.component'

const routes: Routes = [
{path: 'list', component: ListEmployeesComponent},
{path: 'create', component: CreateEmployeeComponent},
{path:'login', component: UserLoginComponent},
{path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
