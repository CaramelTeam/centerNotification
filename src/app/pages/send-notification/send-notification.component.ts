import { Component, OnInit } from '@angular/core';
import { JsonServeService } from 'src/app/service/json-serve.service';
import { SendNotificationService } from 'src/app/service/send-notification.service';

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  public usersData!: any;
  public usersTarget!: any;

  constructor(private sendMess: SendNotificationService, public jsonServe: JsonServeService){}


  ngOnInit(): void {

    this.jsonServe.getUsers().then(resource => {
      this.usersData = resource.data;
  });

  this.jsonServe.getTarget().then(res => {
    this.usersTarget = res.data.map((s: any) => s.digits);
    // this.usersTarget = res.data;
  })
  }



  sendMessageTarget(nameUser: any, digits: string){
    var nameSend = sessionStorage.getItem("userName");
      this.sendMess.setNotification(nameUser.name, digits, nameSend);
  }
}
