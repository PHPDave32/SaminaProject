import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointementComponent } from './appointement/appointement.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AppointementListComponent } from './appointement-list/appointement-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'accueil', component: LoginComponent },

  { path: 'hom', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dash', component: SidenavComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'appointement', component: AppointementComponent },
  { path: 'appointementList', component: AppointementListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
