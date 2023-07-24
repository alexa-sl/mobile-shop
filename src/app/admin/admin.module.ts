import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AdminLayoutComponent,
      children: [
        {path: '', redirectTo: '/admin/login', pathMatch: "full"},
        {path: 'login', component: LoginPageComponent},
        {path: 'product/:id/edit', component: EditPageComponent},
        {path: 'add', component: AddPageComponent},
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'orders', component: OrdersPageComponent}
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
