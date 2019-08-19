import { Directive,ElementRef,HostListener } from '@angular/core';
// import { Quotes } from './quotes'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor="aquamarine";
  }

  // This code will sort highest to lowest vote
  // sortNumbersArray = function(){
  //   let valuesOfVote = this.quotes.votes;
  //   function sortNumber(a, b)
  //   {
  //     return a - b;
  //   }
    
  //   let sortedNumber = valuesOfVote.sort(sortNumber);
  //   let highestVote = sortedNumber[0];
  //   return highestVote;
  // }


  // @HostListener("click", ['$event']) onClicks(){
    
  //   this.backgroundHighlight("aquamarine")
  // }

  // @HostListener("dblclick") onDoubleClicks(){
  //   this.backgroundHighlight("bisque")
  // }

  // private backgroundHighlight(action:string){
  //   this.elem.nativeElement.style.backgroundColor=action;

  // }

}
