import { Component, Input, OnInit } from '@angular/core';
import { BUTTON_CONFIG } from './constants/button-config.constant';
import { Button } from './interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() config: Button = BUTTON_CONFIG;

  constructor() {}

  ngOnInit(): void {}
}
