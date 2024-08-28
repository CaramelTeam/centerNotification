import { Component, ElementRef, HostListener, NgModule, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;


  constructor(){
      this.items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
        { label: 'Login', icon: 'pi pi-fw pi-pencil', routerLink: '/login' },
        { label: 'Menu', icon: 'pi pi-fw pi-pencil', command: () => {
          this.sidebarVisible = this.sidebarVisible ? false : true;
        }}
      ];
  }


}
