import { Component, Input } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Button],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public icon: string = '';
  @Input() public cssClass: string = '';
  @Input() public label: string = '';
  @Input() public outlined: string = 'false';
}
