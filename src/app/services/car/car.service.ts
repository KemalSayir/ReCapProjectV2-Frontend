import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car';
import { CarImagesDetail } from 'src/app/models/carImagesDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  
  apiUrl = 'https://localhost:44393/api/cars/';
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'getcarsbybrandid?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'getcarsbycolorid?color='+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarImagesDetails():Observable<ListResponseModel<CarImagesDetail>>{
    let newPath = this.apiUrl+'getcarimagesdetails';
    return this.httpClient.get<ListResponseModel<CarImagesDetail>>(newPath);
  }
  getCarImagesDetailsByColorId(colorId: number):Observable<ListResponseModel<CarImagesDetail>> {
    let newPath = this.apiUrl+'getcarimagesdetailbycolorid?colorId='+colorId
    return this.httpClient.get<ListResponseModel<CarImagesDetail>>(newPath)
  }
  getCarImagesDetailsByBrandId(brandId: number):Observable<ListResponseModel<CarImagesDetail>> {
    let newPath = this.apiUrl+'getcarimagesdetailbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<CarImagesDetail>>(newPath)
  }
  getCarImagesDetailsByColorIdAndBrandId(colorId:number,brandId: number):Observable<ListResponseModel<CarImagesDetail>> {
    let newPath = this.apiUrl+'getcarimagesdetailbycoloridandbrandid?colorid='+colorId+'&brandid='+brandId;
    return this.httpClient.get<ListResponseModel<CarImagesDetail>>(newPath)
  }
}
