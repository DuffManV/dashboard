import ICategory from '../interfaces/ICategory';
import { Observable, of } from 'rxjs';

const categories$: Observable<any[]> = of([
  {
    id: 1,
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
    id: 2,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 3,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 4,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 5,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 6,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 7,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 8,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 9,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
  {
    id: 10,
    label: 'Хобби и отдых',
    children: [
      {
        label: 'Бег',
      },
    ],
  },
]);

export default categories$;
