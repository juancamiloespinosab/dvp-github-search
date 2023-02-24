import { Component, Input, OnInit } from '@angular/core';
import { ICON_CONFIG } from './constants/icon-config.constant';
import { Icon } from './interfaces/icon.interface';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() config: Icon = ICON_CONFIG;

  constructor() { }

  ngOnInit(): void {
    this.config = {
      ...ICON_CONFIG,
      ...this.config
    }
  }

}
