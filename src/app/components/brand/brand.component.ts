import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  currentBrand:Brand;
  getAllButton:boolean = true;
  brands:Brand[]=[];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data
    })
  }
  
  setCurrentBrand(currentbrand:Brand){
    this.currentBrand = currentbrand;
    this.getAllButton= false;
  }

  setCurrentBrandClass(brand:Brand){
    if(this.getAllButton){
      return "list-group-item list-group-item-action"
    }
    if(this.currentBrand == brand){
      return "list-group-item list-group-item-action active"
    }else{
      return "list-group-item list-group-item-action"
    }
  }

  getAllClass(){
    if(this.getAllButton){
      return "list-group-item list-group-item-action active"
    }else{
      return "list-group-item list-group-item-action"
    }
  }
  
  getAllClickOn(){ 
    this.getAllButton = true;
    return "list-group-item list-group-item-action"
  }
}

