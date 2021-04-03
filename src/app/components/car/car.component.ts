import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImagesDetail } from 'src/app/models/carImagesDetail';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataLoaded = false;
  cars:Car[] = [];
  carImagesDetails:CarImagesDetail[]=[];
  imageBasePath="https://localhost:44393";

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarImagesDetailByBrandId(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarImagesDetailByColorId(params["colorId"])
      }else{
        this.getCarImagesDetails();
      }
    })
  }

  private getCarImagesDetails(){
    this.carService.getCarImagesDetails().subscribe((response)=>{
      this.carImagesDetails = response.data
      this.dataLoaded= true;
    } )
  }

  private getCarImagesDetailByColorId(colorId:number){
    this.carService.getCarImagesDetailsByColorId(colorId).subscribe((response)=>{
      this.carImagesDetails = response.data
      this.dataLoaded= true;
    })
  }
  private getCarImagesDetailByBrandId(brandId:number){
    this.carService.getCarImagesDetailsByBrandId(brandId).subscribe((response)=>{
      this.carImagesDetails = response.data
      this.dataLoaded= true;
    })
  }

  private getCarsByBrandId(brandId:number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data,
      this.dataLoaded = true;
    });
  }

  private getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data,
        this.dataLoaded = true;
    });
  }

  private getCarsByColorId(colorId:number) {
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data,
        this.dataLoaded = true;
    });
  }

}
