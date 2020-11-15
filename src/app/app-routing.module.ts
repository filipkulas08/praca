import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['welcome']);
const redirectLoggedInToHomePage = () => redirectLoggedInTo(['welcome']);
const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
    },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToHomePage }
    },

  {
    path: 'register',
    component: RegistrationComponent
    },

  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
    },
  {
    path: 'admin',
    loadChildren: () => import('./admin-panel/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then(m => m.LearnModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
