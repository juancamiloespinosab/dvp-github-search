import { Component, Input, OnInit } from '@angular/core';
import { TEXT_CONFIG } from './constants/text-config.constant';
import { Text } from './interfaces/text.interface';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() config: Text = TEXT_CONFIG;

  constructor() { }

  ngOnInit(): void {
  }

}
