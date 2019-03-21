import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisplayButtons]'
})
export class DisplayButtonsDirective {
  @HostBinding('class.moved-left') isMovedLeft = false;

  @HostListener('click') toggleOpen() {
    this.isMovedLeft = !this.isMovedLeft;
  }

  constructor() { }

}
