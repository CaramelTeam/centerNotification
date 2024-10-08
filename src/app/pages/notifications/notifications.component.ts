import { Component, OnInit } from '@angular/core';
import { SendNotificationService } from 'src/app/service/send-notification.service';

import { CT_Notification } from 'src/app/interfaces/CT_notification.interfaces';
import { ConnectSignalRService } from 'src/app/service/connect-signal-r.service';
import { MenuComponent } from 'src/app/layout/menu/Menu/menu.component';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationes!: CT_Notification[];
  viewNotification: boolean = false;
  loading: boolean = true;
  constructor(public sendNotification: SendNotificationService, private signalRService: ConnectSignalRService, private toast: MenuComponent){}

  ngOnInit(): void {
    var nameSend = sessionStorage.getItem("userName");
    if(nameSend){

      this.sendNotification.getOldNotificacions(nameSend).then(res => {
          this.notificationes = res;
          this.loading = false;
    });
    }
  }

  closeModal(){
    console.log();
  }

  openModalView(message: CT_Notification){
    this.viewNotification = true;
    this.signalRService.viewNotification(message.message);
    this.sendNotification.clenaNotification(message.id).then(res => {
      this.toast.showToast(res)
    });
  }
}
