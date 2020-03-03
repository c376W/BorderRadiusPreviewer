import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topLeft="";
  topRight="";
  bottomLeft="";
  bottomRight="";
  
  
  
  changeTopLeft(){
    let mainSec=<HTMLElement>document.querySelector(".main");
    mainSec.style.borderTopLeftRadius=this.topLeft+"px";
  }
  changeTopRight(){
    let mainSec=<HTMLElement>document.querySelector(".main");
    mainSec.style.borderTopRightRadius=this.topRight+"px";
  }
  changeBottomLeft(){
    let mainSec=<HTMLElement>document.querySelector(".main");
    mainSec.style.borderBottomLeftRadius=this.bottomLeft+"px";
  }
  changeBottomRight(){
    let mainSec=<HTMLElement>document.querySelector(".main");
    mainSec.style.borderBottomRightRadius=this.bottomRight+"px";
  }
}
