import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SCardInformations } from 'src/app/models/sCardInformations';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    cardNo:string
    lastDateOfUse:string
    cvv:string
    

  constructor(
              private paymentService:PaymentService,
              private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  pay(){
    this.set()
    console.log(SCardInformations.carId+" "+SCardInformations.cardNo+" "+SCardInformations.customerId+" "+SCardInformations.cvv+" "+SCardInformations.lastDateOfUse+" "+SCardInformations.rentDate+" "+SCardInformations.returnDate)
    this.paymentService.hireACar(SCardInformations).subscribe((response)=>{
      if(response.succes){
        this.toastrService.success('Ödeme işlemi başarılı!','Bilgi')
      }else{
        this.toastrService.error(response.message);
      }
    })
  }


  private set() {
    SCardInformations.cardNo = parseInt(this.cardNo);
    SCardInformations.lastDateOfUse = this.lastDateOfUse;
    SCardInformations.cvv = parseInt(this.cvv);
  }
}
