import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  currentDate: Date = new Date();
  appointments: any[] = [
    {
      text: "Reunión de equipo",
      startDate: new Date("2024-09-01T10:00:00.000Z"),
      endDate: new Date("2024-09-01T11:00:00.000Z")
    },
    {
      text: "Llamada con cliente",
      startDate: new Date("2024-09-01T13:00:00.000Z"),
      endDate: new Date("2024-09-01T14:00:00.000Z")
    }
  ];
}
