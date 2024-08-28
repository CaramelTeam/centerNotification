import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendNotificationService {

  apiUrlTarget: string = 'https://localhost:7261/WeatherForecast/Get-infoTarget?sixDigit=';
  constructor(private http: HttpClient) { }

  setNotification(user: string, numberDigits: string, userSend: string | null): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };
      var urlConsul = this.apiUrlTarget + numberDigits + '&nameUser=' + user + '&userSend=' + userSend;
      this.http.get<string>(urlConsul, httpOptions).subscribe(
        res => {
          try {
            // const parsedData = JSON.parse(res);
            resolve({ data: res });
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
}
