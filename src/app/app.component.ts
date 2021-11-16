import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>jQuery slider wrapper</h1>
      <ngx-jquery-slider [value]="slideValue" (valueChange)="onSliderValueChange($event)"></ngx-jquery-slider>
  `,
})
export class AppComponent {
  slideValue: number = 29;
  onSliderValueChange($event: number) {
    this.slideValue = $event;
  }
}
