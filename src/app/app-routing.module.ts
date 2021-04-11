import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cardetails/brand/:brandId",component:CarComponent},
  {path:"cardetails/color/:colorId",component:CarComponent},
  {path:"cardetails/brand/:currentBrand/color/:currentColor",component:CarComponent},
  {path:"cardetails/:carId",component:CarDetailComponent},
  {path:"hiring/:carId",component:RentalComponent},
  {path:"payment/:carId",component:PaymentComponent},

];
// /cardetails/brandandcolor/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
