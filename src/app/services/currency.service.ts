import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  addCurrency(currency){
    const headers = new HttpHeaders().set("Content-Type","application/json");
    this.http.post('http://localhost:8070/gsp/add-currency',currency,{headers: headers}).subscribe(result=>{
      console.log(".......",result);
    })
  }
}
