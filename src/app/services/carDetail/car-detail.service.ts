import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImagesDetail } from 'src/app/models/carImagesDetail';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  

  apiUrl = 'https://localhost:44393/api/cars/';
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
  getCarImagesDetailByCarId(carId: number) {
    let newPath = this.apiUrl+'getcarimagesdetail?carId='+carId;
    return this.httpClient.get<ListResponseModel<CarImagesDetail>>(newPath);
  }
}
