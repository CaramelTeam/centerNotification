import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectSignalRService {
  private hubConnection!: signalR.HubConnection;

  // Cambiar Subject para que sea de tipo DTOTargetInfo
  private messageReceived = new Subject<string>();
  messageReceived$ = this.messageReceived.asObservable();

  constructor() { }

  public startConnection(){
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('wss://localhost:7261/NotiService', {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
      accessTokenFactory: () => 'JuanAvila'
    })
    .build();

    this.hubConnection
    .start()
    .then(() => console.log('Connection started'))
    .catch((err) => console.log('Error while starting connection: ' + err));
  }

  public addReceiveMessageListener() {
    this.hubConnection.on('NotiService', (data: string) => {
      console.log('Received message: ', data);
      this.messageReceived.next(data);
    });
  }

  // Método para enviar mensajes al hub
  public sendMessage(methodName: string, data: any) {
    this.hubConnection.invoke(methodName, data)
      .catch((err) => console.error(err));
  }
}
