import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { OnChanges, OnInit } from '@angular/core/src/metadata';

declare const $: any;

@Component({
  selector: 'ngx-jquery-slider',
  template: `
      <div #location></div>

      <div>
        {{value}}
      </div>
  `,
  styles: ['div {width: 100px}'],
})
export class NgxJquerySliderComponent implements OnInit, OnChanges {
  @Input() value: number = 10;
  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  @ViewChild('location') location;

  widget;

  ngOnChanges() {
    if (this.widget && this.widget.slider('value') !== this.value) {
      this.widget.slider('value', this.value);
    }
  }

  ngOnInit() {
    this.widget = $(this.location.nativeElement).slider();
    this.widget.slider('value', this.value);
    this.widget.on('slidestop', (event, ui) => {
      this.valueChange.emit(ui.value);
    });
  }
}
