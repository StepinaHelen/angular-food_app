import { Injectable } from '@angular/core';
import { LocalStorageKeys } from './types';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setLocalstorageItem<T>(key: LocalStorageKeys, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error saving to LocalStorage');
    }
  }

  getLocalStorageItem<R>(key: LocalStorageKeys): R | null {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch {
      console.log('Error getting data from LocalStorage');
      return null;
    }
  }
}
