import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImagesDetail } from 'src/app/models/carImagesDetail';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarDetailService } from 'src/app/services/carDetail/car-detail.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  carDetails:CarDetail[]=[];
  currentCarImagesDetail:CarImagesDetail[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  imageBasePath="https://localhost:44393"
  currentBrand:number;
  currentColor:number;
  warningOn:boolean;

  constructor(private carDetailService:CarDetailService,
              private activatedRoute:ActivatedRoute,
              private brandService:BrandService,
              private colorService:ColorService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarImagesDetailByCarId(params["carId"]);
      }else{ 

      }
      this.brandService.getBrands();
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

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
    })
  }
   
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors = response.data;
    })
  }

  setCurrentBrand(brandId:number){
    return(brandId===this.currentBrand?true:false)
  }

  setCurrentColor(colorId:number){
    return(colorId===this.currentColor?true:false)
  }
  
  getCurrentColor(){
    return this.currentColor;
  }
  getCurrentBrand(){
    return this.currentBrand;
  }
  addToCart(currentCarImagesDetail:CarImagesDetail){
    this.toastrService.info('Kiralama işlemine başladınız','Bilgi');
  }
  
}

// ['/cardetails/brand/2']
