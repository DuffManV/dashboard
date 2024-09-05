import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Button, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public icon: string = '';
  @Input() public cssClass: string = '';
  @Input() public label: string = '';
  @Input() public outlined: string = 'false';
}
