import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'custom-labeled-control',
  templateUrl: './labeled-control.component.html',
  styleUrls: ['./labeled-control.component.css'],
  host: {
    'class': 'form-group'
  }
})
export class LabeledControlComponent {
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() isRequired: boolean = false;
}
