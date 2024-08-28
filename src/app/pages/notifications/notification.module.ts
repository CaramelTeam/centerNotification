import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { NotificationsTableRoutingModule } from './notification-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    NotificationsTableRoutingModule
  ]
})
export class NotificationModule { }
