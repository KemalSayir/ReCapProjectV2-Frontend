import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[];
  currentColor:Color;
  getAllButton:boolean = true;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  private getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  setCurrentColorClass(color:Color){
    if(this.getAllButton){
      return "list-group-item list-group-item-action"
    }
    if(this.currentColor == color){
      return "list-group-item list-group-item-action active"
    }else{
      return "list-group-item list-group-item-action"
    }
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
    this.getAllButton = false;
  }

  getAllCars(){
    if(this.getAllButton){
      return "list-group-item list-group-item-action active"
    }
    return "list-group-item list-group-item-action"
  }
  getAllCarsClick(){
    this.getAllButton=true;
    return "list-group-item list-group-item-action"
  }
}
