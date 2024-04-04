import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrl: './child-c.component.css'
})
export class ChildCComponent {
@Input()
pchocCnt:number;
@Output()
thnksEvent = new EventEmitter<string>();
sayThanks()
{
  this.thnksEvent.emit("thanks ! got "+this.pchocCnt)
}
}
