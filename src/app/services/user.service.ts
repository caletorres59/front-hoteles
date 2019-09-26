import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GLOBAL } from './global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string;
  public identity;
  public token;

  constructor(public _http:HttpClient) {
    this.url = GLOBAL.url;
   }

   register(userRegister: User) : Observable<any> {
     
     
      //parseo el objeto
      userRegister.role = 'admin';
      userRegister.image = null;
      let params = JSON.stringify(userRegister);
      console.log(params);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      //peticion
      
      return this._http.post(this.url+'register', params, {headers: headers});
     
   }

   signUp(userLogin: User, gettoken = null) : Observable<any>{

    if(gettoken != null){
      userLogin.gettoken = gettoken;
    }
      let params = JSON.stringify(userLogin);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this._http.post(this.url+'login', params, {headers: headers});

   }

   getIdentity(){
     let identity = JSON.parse(localStorage.getItem('identity'));

     if(identity != "undefined"){
          this.identity = identity;
     }else{
       this.identity = null;
     }

     return this.identity;
   }

   getToken(){
     let token = JSON.parse(localStorage.getItem('token'));

     if(token != "undefined"){
       this.token = token;
     }else{
       this.token = null;
     }
     return this.token;
   }
}
