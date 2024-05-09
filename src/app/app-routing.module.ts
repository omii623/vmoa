import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { 
    path: 'not-found', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'main', 
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) 
  },
  { 
    path: 'data', 
    loadChildren: () => import('./pages/data/data.module').then(m => m.DataModule),
    canActivate: [authGuard]
  },
  { 
    path: 'secret', 
    loadChildren: () => import('./pages/secret/secret.module').then(m => m.SecretModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
