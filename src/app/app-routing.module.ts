import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cardetails/brand/:brandId",component:CarComponent},
  {path:"cardetails/color/:colorId",component:CarComponent},
  {path:"cardetails/:carId",component:CarDetailComponent},
  {path:"cardetails/brand/:brandId/cardetails/:carId",component:CarDetailComponent},
  {path:"cardetails/color/:colorId/cardetails/:carId",component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
