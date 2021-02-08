import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HeaderComponent } from './header/header.component';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import { UserComponent} from './user/user.component';

const routes: Routes = [
      { path: 'home',component: HomeComponent },
  { path: 'form',     component: FormComponent },
  {path:'thanks',component:ThankyouComponent},
  {path:'admin',component:AdminComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
    ] ;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
