import { Component, OnInit } from '@angular/core';
import { JsonServeService } from 'src/app/service/json-serve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public jsonService: JsonServeService){

  }

  userData!: any;

  ngOnInit(): void {
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
            // El permiso ya fue concedido
            console.log("Permiso para mostrar notificaciones ya fue concedido.");
        } else if (Notification.permission !== "denied") {
            // Pedir permiso al usuario
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Permiso para mostrar notificaciones fue concedido.");
                }
            });
        }
    } else {
        console.error("El navegador no soporta notificaciones.");
    }

  }

  getUser(){
      this.userData = this.jsonService.getUsers();
  }



}
