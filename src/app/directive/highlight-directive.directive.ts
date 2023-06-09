import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  constructor(private el: ElementRef) {}

  @Input() appHighlightDirective: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.appHighlightDirective);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('');
  }

  highLight(color: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.cursor = 'pointer';
  }
}
