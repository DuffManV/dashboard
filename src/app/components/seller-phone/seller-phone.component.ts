import {
  Component,
  EventEmitter,
  Input,
  input,
  InputSignal,
  Output,
} from '@angular/core';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-seller-phone',
  standalone: true,
  imports: [Button, DialogModule, InputTextModule],
  templateUrl: './seller-phone.component.html',
  styleUrl: './seller-phone.component.scss',
})
export class SellerPhoneComponent {
  @Input() showPhone: boolean = false;
  @Output('closedDialog') dialogClosed: EventEmitter<boolean> =
    new EventEmitter();
  public phone: InputSignal<string | undefined> = input();
  public rulesTitle: string = 'Правила безопасных сделок';
  public rulesText: string[] = [
    'Храните в тайне почту, данные паспорта и код с карты',
    'Игнорируйте ссылки на оплату, которые присылает собеседник',
    'Никому не говорите коды из смс и пуш-уведомлений',
  ];
  public setShowPhone(): void {
    this.dialogClosed.emit(true);
  }
}
