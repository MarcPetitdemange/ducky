import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './component/pages/clients/clients.component';
import { HomeComponent } from './component/pages/home/home.component';
import { NotFoundComponent } from './component/pages/not-found/not-found.component';
import { UsersComponent } from './component/pages/users/users.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'clients', component: ClientsComponent},
  {path:'404', component: NotFoundComponent},
  {path:'**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
