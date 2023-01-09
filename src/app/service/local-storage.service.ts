import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setLocalstorageItem(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error saving to LocalStorage');
    }
  }

  getLocalStorageItem(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key)!);
    } catch {
      console.log('Error getting data from LocalStorage');
      return null;
    }
  }
}
