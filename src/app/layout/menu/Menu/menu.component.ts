import { Component, ElementRef, HostListener, NgModule, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = true;


  constructor(){
      this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '' },
        { label: 'Notificaciones', icon: 'pi pi-fw pi-calendar', routerLink: '/notification' },
        { label: 'Login', icon: 'pi pi-fw pi-pencil', routerLink: '/login' }
      ];
  }

  changeStateMenu(){
    this.sidebarVisible = this.sidebarVisible ? false : true;
  }
}
