import { Component, OnInit } from '@angular/core';
import { JsonServeService } from 'src/app/service/json-serve.service';
import { SendNotificationService } from 'src/app/service/send-notification.service';
import { DTOSendNotification } from 'src/app/interfaces/dto-send-notification';
import { MenuComponent } from 'src/app/layout/menu/Menu/menu.component';


@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.css']
})
export class SendNotificationComponent implements OnInit {

  public usersData!: any;
  public usersTarget!: any;
  viewMultiselect: boolean = false;

  constructor(private sendMess: SendNotificationService, public jsonServe: JsonServeService, private showToast: MenuComponent){}


  ngOnInit(): void {

    this.jsonServe.getUsers().then(resource => {
      this.usersData = resource.data;
  });

  this.jsonServe.getTarget().then(res => {
    // this.usersTarget = res.data.map((s: any) => s.digits);
    this.usersTarget = res;
  })
  }



  sendMessageTarget(nameUsers: any, digits: any){
    let dataSend: DTOSendNotification = {
      sixDigit: digits.digits,
      nameUsers: nameUsers.map((element: any) => element.name),
      userSend: sessionStorage.getItem("userName")
    };
      this.sendMess.setNotification(dataSend);
      this.showToast.showToast(true);
  }

  mutiselect(){
    this.viewMultiselect = this.viewMultiselect ? false : true;
  }
}
