import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
// import { RestService } from './rest.service';
import { HttpClient} from '@angular/common/http';
// import {Users} from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    users:any;
  title = 'orderapp';
    
  
    constructor(private http:HttpClient){}


      ngOnInit():void{
          this.http.get('http://localhost:3000/users').subscribe(res=>{
          // console.log(res)
          this.users = res;
      
      
      })

  
    }
  
                                 
   

    // SaveData(data:any){
    //   console.log(data);
    //   this.http.post('http://localhost:3000/Users', data).subscribe()
    //  // this.Rest.SaveOrderData(this.FormData.value);
    // }
  

  
  

}






  //  users : users[]=[]; 

  
        
  //  submit(data:any){
  //     this.http.post('http://localhost:3000/Users', data).subscribe()
  //     console.log(data)
  //     //this.users=data;
  

  // }


 
