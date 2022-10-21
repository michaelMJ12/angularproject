import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import {RestService} from '../../rest.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
      constructor(private Rest :RestService ){};
  
  ngOnInit(): void {
    
  };


  FormData = new FormGroup({
    fruit:new FormControl(''),
    mineral: new FormControl(''),
    SugarLevel:new FormControl(''),
    AcidicLevel:new FormControl(''),
    AlkalidLevel:new FormControl(''),

  });

  
     
  

  SaveData(){
    
   this.Rest.SaveOrderData(this.FormData.value).subscribe((result)=>{
      console.log(result);
   });

   };


}