import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DTOSendNotification } from '../interfaces/dto-send-notification';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationService {

  // apiUrlTarget: string = 'https://localhost:7261/WeatherForecast/Get-infoTarget?sixDigit=';
  apiUrlTarget: string = 'https://localhost:7261/WeatherForecast/set-notificationTargetCredit';
  constructor(private http: HttpClient) { }


  setNotification(data: DTOSendNotification): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };
      // var urlConsul = this.apiUrlTarget + numberDigits + '&nameUser=' + user + '&userSend=' + userSend;
      this.http.post<any>(this.apiUrlTarget, data, httpOptions).subscribe(res => {
        if(res) {
          resolve(res);
          // this.authServ.getCustomViews();
          // this.myMessageServ.setMessages([{ type: 'success', title: 'Saved', text: 'Succesfully Update' }])
        }else{
          resolve(false);
          // this.myMessageServ.setMessages([{ type: 'error', title: 'Error', text: 'Server Error Please Contact Technical Suport.' }])
        }
      },
      error => {
        console.log(error);
      }
    );
    });
  }


  apiUrlGetNot: string = 'https://localhost:7261/WeatherForecast/get-OldNotification?nameUser=';
  getOldNotificacions(userSend: string | null): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };
      this.http.get<string>(this.apiUrlGetNot + userSend, httpOptions).subscribe(
        res => {
          try {
            // const parsedData = JSON.parse(res);
            resolve(res);
          } catch (e) {
            console.error('Error al parsear JSON:', e);
            resolve({
              status: false,
              message: 'Failed to parse response.',
              alarms: e
            });
          }
        },
        error => {
          console.error('HTTP Error:', error);
          resolve({
            status: false,
            message: (error.error && error.error.message) ? error.error.message : 'Server error. Contact technical support.',
            alarms: error
          });
        }
      );
    });
  }


  apiUrlCleanNoti: string = 'https://localhost:7261/WeatherForecast/clean-notification?idNotification=';
  clenaNotification(id: number) : Promise<any>{
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };
      this.http.get<boolean>(this.apiUrlCleanNoti + id, httpOptions).subscribe(
        res => {
          try {
            // const parsedData = JSON.parse(res);
            resolve(res);
          } catch (e) {
            console.error('Error al parsear JSON:', e);
            resolve({
              status: false,
              message: 'Failed to parse response.',
              alarms: e
            });
          }
        },
        error => {
          console.error('HTTP Error:', error);
          resolve({
            status: false,
            message: (error.error && error.error.message) ? error.error.message : 'Server error. Contact technical support.',
            alarms: error
          });
        }
      );
    });
  }
}
