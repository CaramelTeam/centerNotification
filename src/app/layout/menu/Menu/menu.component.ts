import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ConnectSignalRService } from 'src/app/service/connect-signal-r.service';
import { JsonServeService } from 'src/app/service/json-serve.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;

  private messageSubscription!: Subscription;
  private nameSubcription!: Subscription;
  nameUser: string = ""

  constructor(public JsonService: JsonServeService, private signalRService: ConnectSignalRService, private messageService: MessageService){
      this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
        { label: 'Login', icon: 'pi pi-fw pi-pencil', routerLink: '/login' },
        { label: 'Menu', icon: 'pi pi-fw pi-pencil', command: () => {
          this.sidebarVisible = this.sidebarVisible ? false : true;
        }}
      ];


    this.nameSubcription = this.JsonService.nameLogin$.subscribe((name: string) => {
      this.nameUser = name;
    });
  }



  ngOnInit(): void {
    this.messageSubscription = this.signalRService.messageReceived$.subscribe((message: string) => {
      var dataMessage = JSON.parse(message);
        if (Notification.permission === "granted") {
          var objNot = {
            body: "Esta es una notificación para: " + this.nameUser,
            icon: "https://cdn.pixabay.com/photo/2017/08/25/05/18/international-2679145_1280.png",
            tag: "Movimiento en tu cuenta"
          };
          new Notification('New notification', objNot);
        }
      })
    }


  ngOnDestroy() {
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
    if(this.nameSubcription) this.nameSubcription.unsubscribe();
  }

   public showToast(goodRescuest: boolean){
    goodRescuest
      ? this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' })
      : this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' }) ;
    }
}
