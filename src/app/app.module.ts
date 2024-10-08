import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationCenterComponent } from './pages/notification-center/notification-center.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MenuComponent } from './layout/menu/Menu/menu.component';
import { LoginComponent } from './layout/login/login.component';
import { NewAcountComponent } from './layout/new-acount/new-acount.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { TableModule } from 'primeng/table';

import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DialogModule } from 'primeng/dialog';
import { Login2Component } from './layout/loginSecond/login2.component';
import { BadgeModule } from 'primeng/badge';
import { SendNotificationComponent } from './pages/send-notification/send-notification.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { SkeletonModule } from 'primeng/skeleton';

import { MessageService } from 'primeng/api'; // Importa el servicio
import { DxSchedulerModule } from 'devextreme-angular';
import { CalendarComponent } from './pages/calendar/calendar.component'; //Modulo de calendario para las agendas
import { CalendarModule  } from 'primeng/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FullcalendarComponent } from './pages/fullcalendar/fullcalendar.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationCenterComponent,
    MenuComponent,
    LoginComponent,
    NewAcountComponent,
    NavBarComponent,
    NotificationsComponent,
    Login2Component,
    SendNotificationComponent,
    FooterComponent,
    CalendarComponent,
    FullcalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TabMenuModule,
    SidebarModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule,
    SpeedDialModule,
    SplitButtonModule,
    ScrollPanelModule,
    TieredMenuModule,
    DialogModule,
    BadgeModule,
    MultiSelectModule,
    ToastModule,
    MenuModule,
    SkeletonModule,
    DxSchedulerModule,
    CalendarModule,
    FullCalendarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
