import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationCenterComponent } from './pages/notification-center/notification-center.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MenuComponent } from './layout/menu/Menu/menu.component';
import { LoginComponent } from './layout/login/login.component';
import { NewAcountComponent } from './layout/new-acount/new-acount.component';

import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    NotificationCenterComponent,
    MenuComponent,
    LoginComponent,
    NewAcountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TabMenuModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
