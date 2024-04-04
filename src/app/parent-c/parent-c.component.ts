import { Component } from '@angular/core';
import {CntServiceService} from '../cnt-service.service'
@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrl: './parent-c.component.css'
})
export class ParentCComponent {
chocCount : number = 0;
thankMsg : string = ''
cnt : number;
constructor(public CntServiceService:CntServiceService){}
sendChoco()
{
  this.chocCount = this.chocCount + 1;
  this.getCnt();
  this.cnt = this.CntServiceService.value;
}
acceptThanks(msg:string)
{
  this.thankMsg = msg;


}
getCnt()
{
  this.CntServiceService.decrementCnt();
   alert('val'+this.CntServiceService.value);
}
}
