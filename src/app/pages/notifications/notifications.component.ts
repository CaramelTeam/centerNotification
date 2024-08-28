import { Component, OnInit } from '@angular/core';
import { SendNotificationService } from 'src/app/service/send-notification.service';

import { CT_Notification } from 'src/app/interfaces/CT_notification.interfaces';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationes!: CT_Notification[];

  constructor(public sendNotification: SendNotificationService){}

  ngOnInit(): void {
    var nameSend = sessionStorage.getItem("userName");
    if(nameSend){

      this.sendNotification.getOldNotificacions(nameSend).then(res => {

       res.forEach((element: any) => {
        this.notificationes.push(element);
       });

    });
    }
  }
}
