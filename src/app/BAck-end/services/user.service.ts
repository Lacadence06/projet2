import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
// interface LoginResponse {
//   message?: string; // Message d'erreur générique
//   success: boolean; // Indicateur de connexion réussie
// }

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.serverUrl; // Remplacez par l'URL de votre API


  constructor(private http: HttpClient, private router: Router) {}

   Login(data:any): Observable<any>
   {
     return this.http.post
     (this.apiUrl+"/login",data,
       {
       headers: new HttpHeaders().set('Content-Type', 'application/json')
     }
     )

   }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }



  // login(username: string, password: string): Observable<LoginResponse> {
  //   const url = `${this.apiUrl}/login`;
  //   const body = { username, password };
  //
  //   return this.http.post<LoginResponse>(url, body)
  //     .pipe(
  //       map(response => response), // Aucune transformation nécessaire ici
  //       catchError(error => this.handleError(error))
  //     );
  // }
  //
  // private handleError(error: any): Observable<any> {
  //   console.error('Erreur de connexion:', error);
  //   return throwError(() => new Error('Une erreur est survenue lors de la connexion.')); // Message d'erreur convivial en français
  // }


}
