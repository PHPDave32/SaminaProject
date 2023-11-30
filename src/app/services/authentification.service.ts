import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {APIURL} from "./baseEnpoint";

const loginUrl = APIURL + "/Login/login";
const registerUrl = APIURL + "/Registration/registration";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpClient: HttpClient) { }

  fake_signIn(loginData: any){ /* à supprimer */
    return    {
      id: 1,
      userName: "david",
      password: "david",
      email: "david",
      role: "ADMIN"
    };
  }

  signIn(loginData: any){
    return this.httpClient.post(loginUrl, loginData);
  }


  signUp(registerData: any){
    return this.httpClient.post(registerUrl, registerData);
  }

  // getUes(data) {
  //    let params =  new HttpParams();
  //    if (Util_fonction.checkIfNoTEmpty(data.id_structure)){
  //      params = params.append("id_structure", data.id_structure);
  //    }
  //    if (Util_fonction.checkIfNoTEmpty(data.semestre)){
  //      params = params.append("semestre", data.semestre);
  //    }
  //    if (Util_fonction.checkIfNoTEmpty(data.id_option)){
  //      params = params.append("id_option", data.id_option);
  //    }
  //    return this.httpClient.get<any>(`${baseUrl}`, {params: params});
  //  }
}
