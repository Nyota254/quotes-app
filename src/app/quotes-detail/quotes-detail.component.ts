import { Component, OnInit,Input } from '@angular/core';
import { Quotes } from '../quotes'
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quotes:Quotes;

  constructor() { }

  ngOnInit() {
  }

}
