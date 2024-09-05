import ICategory from '../interfaces/ICategory';
import { Observable, of } from 'rxjs';

const categories$: Observable<ICategory[]> = of([
  {
    label: 'Животные',
    children: [
      {
        label: 'Птицы',
      },
      {
        label: 'Кошки',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
]);

export default categories$;
