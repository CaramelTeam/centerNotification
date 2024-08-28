import { Component } from '@angular/core';
import { MenuComponent } from '../menu/Menu/menu.component';
import { JsonServeService } from 'src/app/service/json-serve.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public menuComp: MenuComponent, public loginCom: JsonServeService){

  }

  showMenu(){
    this.menuComp.sidebarVisible = true;
  }

  cleanLog(){
    sessionStorage.removeItem("userName");
    this.loginCom.login = false;
  }
}
