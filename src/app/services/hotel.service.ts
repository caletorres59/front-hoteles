import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GLOBAL } from './global';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public url:string;
  public identity;
  constructor(private _http: HttpClient) {

    this.url = GLOBAL.url;
   }

   getHotels() : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this._http.get(this.url+'get-hotels/1', {headers: headers});
   }

   addHotel(hotel: Hotel) {
     hotel.estrellas = '4';
     hotel.logo = 'noimage';
     hotel.user = JSON.parse(localStorage.getItem('identity'))._id;
     let params = hotel;
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this._http.post(this.url+'add-hotel', params, {headers: headers});
      
   }

   getHotelById(id:string) : Observable<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this._http.get(this.url+ 'hotel/' + id, {headers: headers});
       
   }

   updateHotel(hotel: Hotel) : Observable<any>{
    let id = hotel._id;
    let params = hotel;
    let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
    return this._http.put(this.url+ 'update-hotel/' + id, params, {headers: headers});
   }
}
