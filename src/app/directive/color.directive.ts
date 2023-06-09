import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color = "green"
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.color = ""
  }

}
