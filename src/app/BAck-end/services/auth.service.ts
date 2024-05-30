import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.serverUrl; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, { username, password },{ headers: httpHeaders })
      .pipe
      (
        map
        (response =>
          {
          // Handle successful login response (e.g., extract user data, set token)
          console.log('Login successful:', response);
          // Return appropriate data or redirect to the next page
          return response;
         }
       ),
    catchError(error => {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message)
      return of({ error: error.message });
    })
      );

  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }
  }
