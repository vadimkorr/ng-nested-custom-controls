import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-custom-labeled',
  templateUrl: './labeled.component.html',
  styleUrls: ['./labeled.component.css']
})
export class LabeledComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() isRequired: boolean = false;
}
