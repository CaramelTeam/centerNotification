import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformationCountryService {

  urlConsult: string = 'https://restcountries.com/v3.1/name/';
  constructor(
    private http: HttpClient,
  ) { }

  getInfoConsult(country: string | undefined): Promise<any> {
    return new Promise<any>((resolve) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Accept': '*/*'
        }),
      };

      this.http.get<string>(this.urlConsult + country, httpOptions).subscribe(
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

}
