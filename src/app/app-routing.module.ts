import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallProfileContainerComponent } from './call-profile/call-profile-container.component';
import { CallsContainerComponent } from './calls/calls-container.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginContainerComponent } from './login/login-container.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginContainerComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calls',
      },
      {
        path: 'calls',
        children: [
          {
            path: '',
            component: CallsContainerComponent,
          },
          {
            path: ':callId',
            component: CallProfileContainerComponent,
          }
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
