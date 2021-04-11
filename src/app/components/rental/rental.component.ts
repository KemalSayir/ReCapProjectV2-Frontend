import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCardInformations } from 'src/app/models/sCardInformations';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental/rental.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  /*export interface Rental{
    id:number,
    carId:number,
    customerId:number,
    rentDate:Date,
    returnDate:Date
} */
  doNotGo:boolean;
  rental:Rental;
  firstDay:string;
  lastDay:string;
  currentCarId:string;
  customerId:string;
  // rental:Rental;
  rentals:Rental[]=[];
  constructor(private rentalService:RentalService,
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService) { }

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.currentCarId = params["carId"]
      }
    }
    )
    
  }

  private getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  hire(){
    if(new Date(this.firstDay) > new Date(this.lastDay)){
      this.doNotGo = false
      return false;
    }
    this.doNotGo = true
    SCardInformations.carId = parseInt(this.currentCarId); 
    SCardInformations.customerId = parseInt(this.customerId);
    SCardInformations.rentDate = new Date(this.firstDay);
    SCardInformations.returnDate = new Date(this.lastDay);
    console.log(typeof(SCardInformations.carId)+" "+typeof(SCardInformations.customerId)+" "+typeof(SCardInformations.rentDate)+" "+typeof(SCardInformations.returnDate));
    return this.Check()
  }
  Check(){
      return 
  }
}
