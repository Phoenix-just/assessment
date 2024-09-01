import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiObj } from './shared.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  callApi({ url, method, body = null }: ApiObj): Observable<any> {
    switch (method.toUpperCase()) {
      case 'GET':
        return this.http.get(url);
      case 'POST':
        return this.http.post(url, body);
      default:
        return of(false);
    }
  }
}
