import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSendTableRoutingModule } from './notification-routing.module';

import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotificationSendTableRoutingModule,
    MultiSelectModule
  ]
})
export class SendNotificationModule { }
