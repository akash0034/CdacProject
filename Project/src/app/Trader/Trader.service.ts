import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TraderService {

  http: HttpClient

  url = 'http://localhost:4000/TraderReg'

  constructor( http: HttpClient) { 
    this.http=http
  }

  getAllTrader(){
    return this.http.get(this.url)
  }
  get(){
    return this.http.get(this.url)
  }
  
  
  
  login(Tr_Email: string, Tr_password: string) {
    const body = {
      Tr_Email: Tr_Email,
      Tr_password: Tr_password
    }

    return this.http.post(this.url + '/login', body)
  }

  register(Tr_name: string,Tr_Address:string,
    Tr_Email:string,Tr_Phone:string,
    Tr_Catagory:string,Tr_password:string) {
   
   
      const body = {
        Tr_name:Tr_name,
        Tr_Address :Tr_Address,
        Tr_Email:Tr_Email,
        Tr_Phone:Tr_Phone,
        Tr_Catagory :Tr_Catagory,
        Tr_password:Tr_password
  }

    return this.http.post(this.url + '/register', body)
  }

  deleteTrader(Tr_id: number) {
    return this.http.delete(this.url + '/' + Tr_id)
  }
}
