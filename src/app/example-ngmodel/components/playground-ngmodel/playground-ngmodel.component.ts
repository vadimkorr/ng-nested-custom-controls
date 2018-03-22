import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-playground-ngmodel',
  templateUrl: './playground-ngmodel.component.html',
  styleUrls: ['./playground-ngmodel.component.css']
})
export class PlaygroundNgmodelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name: string = '';

}
