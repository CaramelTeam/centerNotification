import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonServeService } from 'src/app/service/json-serve.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {

  constructor(public serviceJson: JsonServeService, private route: Router){

  }

public userData: any;

  getUser(name: string, password: string){
      this.serviceJson.getUserEspecific(name, password).then(res => {
        if (res.data.length >= 1){
          this.userData = res.data;
          sessionStorage.setItem("userName", res.data[0].name);
          this.route.navigate(['/notification']);
          this.serviceJson.login = true;
          this.serviceJson.viewModalLogin = false;
        }

      });
  }

}
