import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-playground-template-driven-forms',
  templateUrl: './playground-template-driven-forms.component.html',
  styleUrls: ['./playground-template-driven-forms.component.css']
})

export class PlaygroundTemplateDrivenFormsComponent {

  entity = {
    field1: 'field #1',
    field2: 'field #2',
    field3: 'type1',
    field4: null
  };

  types = ['type1', 'type2', 'type3'];
  objectTypes = [{
    id: 'type1',
    name: 'first type'
  }, {
    id: 'type2',
    name: 'second type'
  }, {
    id: 'type3',
    name: 'third type'
  }];

  submit() {
    alert(`Submitted succesfully!\n${JSON.stringify(this.entity, null, 2)}`);
  }

}
