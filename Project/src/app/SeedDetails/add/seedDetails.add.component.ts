import { Component, OnInit } from '@angular/core';
import { seedDetailsService } from '../seedDetails.service';
import * as toastr from 'toastr'
import { Router } from '@angular/router';
import { CropDetailsService } from '../../CropDetails/cropdetail.service';

@Component({
  selector: 'app-seedDetails-register',
  templateUrl:'./seedDetails.add.component.html',
  styleUrls: ['./seedDetails.add.component.css']
})

export class seedDetailsAddComponent implements OnInit {
  crops =[]
   
    Crop_id: any;
    Seed_Name =''
    Seed_Price:number
  

  constructor(
    private router: Router,
    private seedDetailsService: seedDetailsService,
    private CropDetailsService: CropDetailsService) {
      this.CropDetailsService
      .get()
      .subscribe(response=>{
        if(response['status']== 'success'){
        this.crops =response['data']
        this.Crop_id = this.crops[0].id
      }else {
        console.log(response['error'])
      }
      })








    
  }

  ngOnInit() { }

  onseedAdd() {
    this.seedDetailsService
      .addseedDetails(this.Crop_id,this.Seed_Name,this.Seed_Price)
      .subscribe(response => {
        if (response['status'] == 'success') {
          toastr.success('added Seed Details successfully')
          this.router.navigate(['/seed-list'])
        } else {
          console.log(response['error'])
        }
      })
  }
}
