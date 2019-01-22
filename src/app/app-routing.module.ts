import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsContainerComponent } from './calls/calls-container.component';
import { LoginContainerComponent } from './login/login-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calls',
  },
  {
    path: 'login',
    component: LoginContainerComponent,
  },
  {
    path: 'calls',
    component: CallsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
