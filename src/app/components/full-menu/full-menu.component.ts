import { Component, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import allMenu$ from '../../data/all-menu';
import IMenu from '../../interfaces/IMenu';

@Component({
  selector: 'app-full-menu',
  standalone: true,
  imports: [],
  templateUrl: './full-menu.component.html',
  styleUrl: './full-menu.component.scss',
})
export class FullMenuComponent {
  public menu: Signal<IMenu[] | undefined> = toSignal(allMenu$);
}
