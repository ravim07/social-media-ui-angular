import { ElementRef } from '@angular/core';
import { ColorDirective } from './color.directive';

describe('ColorDirective', () => {
  it('should create an instance', () => {
    const elMock = new ElementRef(null);
    const directive = new ColorDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
