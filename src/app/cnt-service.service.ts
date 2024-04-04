import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CntServiceService {
  public value = 9;
  constructor() { }
   public decrementCnt()
  {
    this.value --;
  }

}
