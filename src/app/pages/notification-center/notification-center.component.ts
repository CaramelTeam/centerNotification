import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ConnectSignalRService } from 'src/app/service/connect-signal-r.service';
import { Subscription } from 'rxjs';
import { DTOTargetInfo } from 'src/app/interfaces/DTO_targetInfo.interfaces';
import { InformationCountryService } from 'src/app/service/information-country.service';
import { JsonServeService } from 'src/app/service/json-serve.service';
import { SendNotificationService } from 'src/app/service/send-notification.service';
import { ViewNotificationService } from 'src/app/service/view-notification.service';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.css']
})

export class NotificationCenterComponent implements OnInit, OnDestroy {
  private messageSubscription!: Subscription;
  public messages: string[] = [];
  public messageCurrent: string | undefined = '';
  public dataFormat: DTOTargetInfo = {
    Status: "",
    Scheme: "",
    Type: "",
    Issuer: "",
    CardTier: "",
    Country: {
      A2: "",
      A3: "",
      N3: "",
      Isd: "",
      Name: "",
      Cont: ""
    },
    luhn: false
  };


  public dataCountry!: Object;
  public dataCountryInfo!: any;
  public urlFlags: string = "https://cdn.pixabay.com/photo/2017/08/25/05/18/international-2679145_1280.png";

  public usersData!: any;
  public usersTarget!: any;

  public selectedUser: string | undefined;
  public userNameCurrent: string | null = "";

  @Input() datosRecibidos: any;


  constructor(private signalRService: ConnectSignalRService,
    private informationCountry: InformationCountryService,
    private jsonServe: JsonServeService,
    private sendMess: SendNotificationService,
    public messageData: ViewNotificationService
  ) {

  }
  ngOnInit() {
    const data = sessionStorage.getItem("userName");
    // var dataNme = data ? JSON.parse(data) : null;
    this.userNameCurrent = data;
    this.signalRService.startConnection(data);
    this.signalRService.addReceiveMessageListener();

    this.messageSubscription = this.signalRService.messageReceived$.subscribe((message: string) => {
      this.messages.push(message);
      this.dataFormat = JSON.parse(message) as DTOTargetInfo;
      this.informationCountry.getInfoConsult(this.dataFormat.Country.Name).then(res => {
        this.urlFlags = res.data[0].flags.png;
        // this.dataCountryInfo = JSON.parse(res[0]);
        if (Notification.permission === "granted") {
          var objNot = {
            body: "Esta es una notificación para: " + this.userNameCurrent,
            icon: res.data[0].flags.svg,
            tag: "Movimiento en tu cuenta"
          };
          new Notification('New notification', objNot);
        }
      })
    });


    this.jsonServe.getUsers().then(resource => {
      this.usersData = resource.data;
    });

    this.jsonServe.getTarget().then(res => {
      this.usersTarget = res.data.map((s: any) => s.digits);
      // this.usersTarget = res.data;
    })


  }

  sendMessage() {
    this.signalRService.sendMessage('SendMessageToServer', { text: 'Hello, server!' });
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  sendMessageTarget(nameUser: any, digits: string) {
    var nameSend = sessionStorage.getItem("userName");
    this.sendMess.setNotification(nameUser.name, digits, nameSend);
  }
}
