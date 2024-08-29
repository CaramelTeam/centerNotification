import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/Menu/menu.component';
import { Login2Component } from './layout/loginSecond/login2.component';
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
        component: Login2Component
      },
      {
        path: 'newAccount',
        component: NewAcountComponent
      },
      {
        path: 'notification',
        loadChildren: () => import('./pages/notification-center/notification-center.module').then(s => s.NotificationCenterModule)
      },
      {
        path: 'notificationView',
        canLoad: [],
        loadChildren: () => import('./pages/notifications/notification.module').then(s => s.NotificationModule)
      },
      {
        path: 'notificationSend',
        loadChildren: () => import('./pages/send-notification/notification-routing.module').then(s => s.NotificationSendTableRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
