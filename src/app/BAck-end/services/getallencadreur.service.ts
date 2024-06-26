import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetallencadreurService {


  private apiUrl = environment.serverUrl; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getAllencadreur(): Observable<any>
  {
    return this.http.get<any>
    (this.apiUrl+"/encadreur/liste");
  }


}
