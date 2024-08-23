import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/Menu/menu.component';
import { LoginComponent } from './layout/login/login.component';
import { NewAcountComponent } from './layout/new-acount/new-acount.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'newAccount',
        component: NewAcountComponent
      },
      {
        path: 'notification',
        loadChildren: () => import('./pages/notification-center/notification-center.module').then(s => s.NotificationCenterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
