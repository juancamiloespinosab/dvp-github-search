import { Component, Input, OnInit } from '@angular/core';
import { ICON_BUTTON_CONFIG } from './constants/icon-button-config.constant';
import { IconButton } from './interfaces/icon-button.interface';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent implements OnInit {
  @Input() config: IconButton = ICON_BUTTON_CONFIG;

  constructor() {}

  ngOnInit(): void {}
}
