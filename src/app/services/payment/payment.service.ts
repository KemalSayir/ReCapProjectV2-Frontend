import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardInformations } from 'src/app/models/cardInformations';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = 'https://localhost:44393/api/cardinformations/';

  constructor(private httpClient:HttpClient) { }

  hireACar(cardinformations:CardInformations):Observable<ResponseModel>{
    let newPath = this.apiUrl+'hire';
    console.log(cardinformations)
    return this.httpClient.post<ResponseModel>(newPath,cardinformations);

  }

}
