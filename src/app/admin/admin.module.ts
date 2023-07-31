import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./shared/auth.guard";
import {QuillModule} from "ngx-quill";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: AdminLayoutComponent,
      children: [
        {path: '', redirectTo: '/admin/login', pathMatch: "full"},
        {path: 'login', component: LoginPageComponent},
        {path: 'product/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
        {path: 'add', component: AddPageComponent},
        {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
        {path: 'orders', component: OrdersPageComponent, canActivate: [AuthGuard]}
      ]
    }])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminLayoutComponent,
    AddPageComponent,
    DashboardPageComponent,
    EditPageComponent,
    LoginPageComponent,
    OrdersPageComponent
  ]
})

export class AdminModule {}
