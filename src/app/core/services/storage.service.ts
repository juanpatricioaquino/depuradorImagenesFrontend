import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  // If the logged in user details are stored in local storage the user will stay logged in if they refresh
  // the browser and also between browser sessions until they logout

  // Para cambiar el tipo de storage a utilizar modificar el valor en el archivo de enviorment correspondiente
  // los valores posibles son LOCALSTORAGE o SESSIONSTORAGE

  setItem(key: string, value: string): void {
    if (environment.storage === 'SESSIONSTORAGE') {
      sessionStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string): string {
    if (environment.storage === 'SESSIONSTORAGE') {
      return sessionStorage.getItem(key);
    } else {
      return localStorage.getItem(key);
    }
  }

  key(index: number): string {
    if (environment.storage === 'SESSIONSTORAGE') {
      return sessionStorage.key(index);
    } else {
      return localStorage.key(index);
    }
  }

  removeItem(key: string): void {
    if (environment.storage === 'SESSIONSTORAGE') {
      sessionStorage.removeItem(key);
    } else {
      localStorage.removeItem(key);
    }
  }
}
