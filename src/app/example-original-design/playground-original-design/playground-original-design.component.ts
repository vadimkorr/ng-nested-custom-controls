import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'custom-playground-original-design',
  templateUrl: './playground-original-design.component.html',
  styleUrls: ['./playground-original-design.component.css']
})
export class PlaygroundOriginalDesignComponent {

  constructor(
    private _fb: FormBuilder
  ) { }

  entity = {
    field1: 'field #1',
    field2: 'field #2',
    field3: 'type1',
    field4: null
  };

  entityForm = this._fb.group({
    field1: [this.entity.field1, Validators.compose([Validators.minLength(2), Validators.required])],
    field2: [this.entity.field2, Validators.compose([Validators.minLength(2), Validators.required])],
    field3: [this.entity.field3, Validators.required],
    field4: [this.entity.field4, Validators.required]
  });

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
