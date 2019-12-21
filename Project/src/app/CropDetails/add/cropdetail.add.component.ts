import { Component, OnInit } from '@angular/core';
import { CropDetailsService } from '../cropdetail.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { CroptypeService } from '../../CropType/croptype.service';
import { from } from 'rxjs';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-cropdetail-register',
  templateUrl:'./cropdetail.add.component.html',
  styleUrls: ['./cropdetail.add.component.css']
})

export class CropDetailAddComponent implements OnInit {
croptypes =[]
  
  CropType_id:number
  Crop_Sesaon = ''
  Crop_Category  = ''
  Crop_Name  = ''
  Crop_Info  = ''
  Crop_Price  :number
  Crop_Img : any

  constructor(
    private router: Router,
    private CropDetailsService: CropDetailsService,
    private CroptypeService : CroptypeService) {
      
      this.CroptypeService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.croptypes =response['data']
        this.CropType_id = this.croptypes[0].id
      }else {
        console.log(response['error'])
      }
      })
    
  }

  ngOnInit() { }

  onSelectFile(event) {
    this.Crop_Img = event.target.files[0]
  }


  onCropAdd() {
    this.CropDetailsService
      .addCropDetails(this.CropType_id,this.Crop_Sesaon,this.Crop_Category,this.Crop_Name,this.Crop_Info,this.Crop_Price,this.Crop_Img)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('Crop Added successfully')
          this.router.navigate(['/cropdetails-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
