import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getfirebasedata(da){
    const headers = new HttpHeaders({
      'Accept': 'application/json',
    });
    headers.delete('Content-Type');
    const requestOptions = { headers: headers };
    const formData = new FormData();
    
    return this.http.get(da,requestOptions);
  }
}
