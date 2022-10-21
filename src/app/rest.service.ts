import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/catch';
// import  'rxjs/add/observable/throw';
import { observable } from 'rxjs';
// import {Users} from './Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { };
   
  url: string = 'http://localhost:3000/users';

   getUsers()
   {
     return this.http.get(this.url);
   };

   SaveOrderData(user:any){
           console.log(user);
         return this.http.post(this.url, user);
         

}


}