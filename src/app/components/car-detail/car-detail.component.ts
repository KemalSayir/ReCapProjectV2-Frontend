import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImagesDetail } from 'src/app/models/carImagesDetail';
import { CarDetailService } from 'src/app/services/carDetail/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  imageBasePath="https://localhost:44393"
  currentCarImagesDetail:CarImagesDetail[]=[];
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarImagesDetailByCarId(params["carId"]);
      }else{ 

      }
    })
  }
  getCarImagesDetailByCarId(carId:number) {
    this.carDetailService.getCarImagesDetailByCarId(carId).subscribe((response) => {
      this.currentCarImagesDetail = response.data
      console.log(this.currentCarImagesDetail);
    });
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe((response)=>{
      this.carDetails = response.data
      });
  }
}
