import { Observable, of } from 'rxjs';
import IMenu from '../interfaces/IMenu';

const allMenu$: Observable<IMenu[]> = of([
  {
    id: 1,
    label: 'Транспорт',
  },
  {
    id: 2,
    label: 'Недвижимость',
  },
  {
    id: 3,
    label: 'Работа',
  },
  {
    id: 4,
    label: 'Услуги',
  },
  {
    id: 5,
    label: 'Личные вещи',
  },
  {
    id: 6,
    label: 'Для дома и дачи',
  },
  {
    id: 7,
    label: 'Автозапчасти и акссесуары',
  },
  {
    id: 8,
    label: 'Электроника',
  },
  {
    id: 9,
    label: 'Хобби и отдых',
  },
  {
    id: 10,
    label: 'Животные',
  },
  {
    id: 11,
    label: 'Бизнес и оборудовние',
  },
]);

export default allMenu$;
