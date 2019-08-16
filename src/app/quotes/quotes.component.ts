import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes : Quotes[] = [
    new Quotes('Pulisic','Live as if you were to die tomorrow. Learn as if you were to live forever' , 'Mahatma Gandhi' , 0 , new Date(2019,2,1)),
    new Quotes('Pedro','Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.' , 'Bernard M. Baruch' , 0 , new Date(2019,3,1)),
    new Quotes('Kante','If you cannot do great things, do small things in a great way.' , 'Napoleon Hill' , 0 , new Date(2019,4,1)),
    new Quotes('Giroud','Strive not to be a success, but rather to be of value.' , 'Albert Einstein' , 0 , new Date(2019,5,1)),
    new Quotes('Frank Lampard','I haven’t failed. I’ve just found 10,000 ways that won’t work.' , 'Thomas Edison' , 0 , new Date(2019,6,1))
  ]

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
