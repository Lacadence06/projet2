import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Front-end/environment/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `${environment.apiUrl}`;
  constructor(private httpClient:HttpClient) { }
 
  Login(data:any): Observable<any>
  {
    return this.httpClient.get(this.url+"/login"+data,{
     headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
