import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirectiveDirective', () => {
  const elMock = new ElementRef(null);
  it('should create an instance', () => {
    const directive = new HighlightDirectiveDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
