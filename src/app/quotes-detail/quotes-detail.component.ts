import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quotes:Quotes;
  @Output() delete1 = new EventEmitter<boolean>();

  deleteQuote(deletion:boolean){
    this.delete1.emit(deletion);
  }

  constructor() { }

  ngOnInit() {
  }

}
