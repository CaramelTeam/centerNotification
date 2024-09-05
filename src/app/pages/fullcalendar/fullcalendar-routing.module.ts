import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarComponent } from '@fullcalendar/angular';

const routes: Routes = [
  {
    path: '', component: FullCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullcalendarRoutingModule { }
