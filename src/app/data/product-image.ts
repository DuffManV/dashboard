import { Observable, of } from 'rxjs';
import IProductImage from '../interfaces/IProductImage';

const productImage$: Observable<IProductImage[]> = of([
  {
    itemImageSrc: '../images/notebook.jpg',
    thumbnailImageSrc: '../images/notebook.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '../images/notebook.jpg',
    thumbnailImageSrc: '../images/notebook.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '../images/notebook.jpg',
    thumbnailImageSrc: '../images/notebook.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '../images/notebook.jpg',
    thumbnailImageSrc: '../images/notebook.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
  {
    itemImageSrc: '../images/notebook.jpg',
    thumbnailImageSrc: '../images/notebook.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1',
  },
]);

export default productImage$;
