import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewNotificationService {

  constructor() { }

  public dataMessage!: string;
}
