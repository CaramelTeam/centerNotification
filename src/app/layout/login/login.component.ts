import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonServeService } from 'src/app/service/json-serve.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private serviceJson: JsonServeService, private route: Router){

  }

public userData: any;

  getUser(name: string, password: string){
      this.serviceJson.getUserEspecific(name, password).then(res => {
        this.userData = res;
        if(res) this.route.navigate(['/notification']);
      });
  }

}
