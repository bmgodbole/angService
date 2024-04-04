import { Component } from '@angular/core';
import {CntServiceService} from  '../cnt-service.service'
@Component({
  selector: 'app-bookseat',
  templateUrl: './bookseat.component.html',
  styleUrl: './bookseat.component.css'
})
export class BookseatComponent {
seats : any [] = [1,2,3,4,5,6,7,8,9];
bookedSeats: any[] = [];
flag = true;
style = { 
  "st" : 'green'
}
constructor(public CntServiceService:CntServiceService) {}
Bookme(seatno)
{
  if(this.bookedSeats.filter(p=>p.seatNo == seatno).length > 0 ) 
  {
        alert("Already Booked");

  }
  else
  {
  this.flag = !this.flag;
  let obj={ "seatNo":seatno,"isBooked": true}
  this.bookedSeats.push(obj);
  alert('booked '+ JSON.stringify(this.bookedSeats));
  this.CntServiceService.decrementCnt();  
  alert("no of seats remainng "+this.CntServiceService.value);
}
}
}
