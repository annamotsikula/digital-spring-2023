import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _localStorage = localStorage
  constructor() { }

  get(key: string): any | undefined {
    const result = this._localStorage.getItem(key)
    if(result !== null) {
      return JSON.parse(result)
    }
    return this._localStorage.getItem(key) || undefined
  }

  set(key: string, value: any) {
    this._localStorage.setItem(key, JSON.stringify(value))
  }

  remove(key: string) {
    this._localStorage.removeItem(key)
  }

  clearStorage() {
    this._localStorage.clear() 
  }

  keyExists(key: string): boolean {
    return !!this.get(key)
  }
}
