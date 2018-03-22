import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  value: string = '';
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
}
