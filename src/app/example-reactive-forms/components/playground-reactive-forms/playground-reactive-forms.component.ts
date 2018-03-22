import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'custom-playground-reactive-forms',
  templateUrl: './playground-reactive-forms.component.html',
  styleUrls: ['./playground-reactive-forms.component.css']
})
export class PlaygroundReactiveFormsComponent {

  constructor(
    private _fb: FormBuilder
  ) { }

  userName: string;
  lastName: string;

  userForm = this._fb.group({
    userName: [this.userName, Validators.compose([Validators.minLength(2), Validators.required])],
    lastName: [this.lastName, Validators.compose([Validators.minLength(2), Validators.required])]
  });

  submit() {
    alert('submitted!');
  }

}
