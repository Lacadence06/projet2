import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MethodHttpService {
url:string=environment.serverUrl
  constructor(private http:HttpClient) {}
  _get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    if (params) {
      reqOpts.params = params;
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  _post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }


  // _getArtci(endpoint: string, params?: any, reqOpts?: any) {
  //   if (!reqOpts) {
  //     reqOpts = {
  //       params: new HttpParams()
  //     };
  //   }
  //
  //   if (params) {
  //     reqOpts.params = params;
  //   }
  //
  //   return this.http.get(this.artciUrl + '/' + endpoint, reqOpts);
  // }
  //
  // _postArtci(endpoint: string, body: any, reqOpts?: any) {
  //   return this.http.post(this.artciUrl + '/' + endpoint, body, reqOpts);
  // }
  //
  // _patchArtci(endpoint: string, body: any, reqOpts?: any) {
  //   return this.http.patch(this.artciUrl + '/' + endpoint, body, reqOpts);
  // }
}
