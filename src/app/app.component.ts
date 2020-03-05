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
  copyMessage(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = "border-top-left-radius:"+this.topLeft+"px;"+"\n"
    +"border-top-right-radius:"+this.topRight+"px;"+"\n"
    +"border-bottom-left-radius:"+this.bottomLeft+"px;"+"\n"
    +"border-bottom-right-radius:"+this.bottomRight+"px;";
    
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
