import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ConnectSignalRService } from 'src/app/service/connect-signal-r.service';
import { Subscription } from 'rxjs';
import { DTOTargetInfo } from 'src/app/interfaces/DTO_targetInfo.interfaces';
import { InformationCountryService } from 'src/app/service/information-country.service';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.css']
})

export class NotificationCenterComponent implements OnInit, OnDestroy  {
  private messageSubscription!: Subscription;
  public messages: string[] = [];
  public messageCurrent: string | undefined = '';
  public dataFormat!: DTOTargetInfo;

  public dataCountry!: Object;
  public dataCountryInfo!: any;
  public urlFlags!: string;

  @Input() datosRecibidos: any;


  constructor(private signalRService: ConnectSignalRService, private informationCountry: InformationCountryService){

  }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addReceiveMessageListener();


    this.messageSubscription = this.signalRService.messageReceived$.subscribe((message: string) => {
      this.messages.push(message);
      this.dataFormat = JSON.parse(message) as DTOTargetInfo;
      this.informationCountry.getInfoConsult(this.dataFormat.Country.Name).then(res => {
        this.urlFlags = res.data[0].flags.png;
        // this.dataCountryInfo = JSON.parse(res[0]);
        if (Notification.permission === "granted") {
          var objNot = {
            body: "Esta es una notificación emergente desde tu página web.",
            icon: "https://example.com/icon.png",
            tag: "notification-demo"
            };
          new Notification('New notification', objNot);
        }
      })
    });
  }

  sendMessage() {
    this.signalRService.sendMessage('SendMessageToServer', { text: 'Hello, server!' });
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

}
