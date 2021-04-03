import { CarImage } from "./carImage";

export interface CarImagesDetail{
carId:number,
carName:string,
brandName:string,
colorName:string
description:string,
dailyPrice:number
modelYear:number,
carImages:CarImage[],
}