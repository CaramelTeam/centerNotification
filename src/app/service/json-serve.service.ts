import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServeService {
  private apiUrl = 'http://localhost:3000/users'; // URL de la API simulada
  private urlUser = 'http://localhost:3000/users?name=';
  public login: boolean = false;
  public viewModalLogin: boolean = false;

  private nameLogin = new Subject<string>();
  nameLogin$ = this.nameLogin.asObservable();

  private apiUrlTarget = 'http://localhost:3000/targetNumber'; // URL de la API simulada

  constructor(private http: HttpClient) { }

  getUsers(): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };

      this.http.get<string>(this.apiUrl, httpOptions).subscribe(
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

  getUserEspecific(name: String, password: string): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };;
      this.http.get<string>(this.urlUser + name + "&password=" + password, httpOptions).subscribe(
        res => {
          try {
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


  getTarget(): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };

      this.http.get<string>(this.apiUrlTarget, httpOptions).subscribe(
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

  public updateName(name: string){
    this.nameLogin.next(name);
  }
}
