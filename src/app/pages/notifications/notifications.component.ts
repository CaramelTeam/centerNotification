import { Component, OnInit } from '@angular/core';
import { SendNotificationService } from 'src/app/service/send-notification.service';

import { CT_Notification } from 'src/app/interfaces/CT_notification.interfaces';
import { ConnectSignalRService } from 'src/app/service/connect-signal-r.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationes!: CT_Notification[];
  viewNotification: boolean = false;
  constructor(public sendNotification: SendNotificationService, private signalRService: ConnectSignalRService){}

  ngOnInit(): void {
    var nameSend = sessionStorage.getItem("userName");
    if(nameSend){

      this.sendNotification.getOldNotificacions(nameSend).then(res => {
          this.notificationes = res;
    });
    }
  }

  closeModal(){
    console.log();
  }

  openModalView(message: CT_Notification){
    this.viewNotification = true;
    this.signalRService.viewNotification(message.message);
  }
}
