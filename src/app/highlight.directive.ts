import { Directive,ElementRef,HostListener } from '@angular/core';
// import { Quotes } from './quotes'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {}

  // This code will sort highest to lowest vote
  @HostListener("click") onClicks(){
    this.backgroundHighlight("aquamarine")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.backgroundHighlight("bisque")
  }

  private backgroundHighlight(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }

}
