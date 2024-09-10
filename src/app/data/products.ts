import { Observable, of } from 'rxjs';
import IProduct from '../interfaces/IProduct';

const products$: Observable<IProduct[]> = of([
  {
    id: 1,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 2,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 3,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 4,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 5,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 6,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 7,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
  {
    id: 8,
    picture: '../images/notebook.jpg',
    name: 'Название',
    price: '300',
    location: 'Адрес',
    date: 'Сегодня в 15-30',
  },
]);

export default products$;
