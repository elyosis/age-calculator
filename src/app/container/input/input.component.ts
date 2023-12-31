import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() control!: any;
  @Input() name!: string;
  @Input() placeholder!: string;
  @Input() formWideError?: boolean;
}
