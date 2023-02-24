import { Component, Input, OnInit } from '@angular/core';
import { TEXT_INPUT_CONFIG } from './constants/text-input-config.costant';
import { TextInput } from './interfaces/text-input.interface';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input() config: TextInput = TEXT_INPUT_CONFIG;

  constructor() { }

  ngOnInit(): void {
  }

}
