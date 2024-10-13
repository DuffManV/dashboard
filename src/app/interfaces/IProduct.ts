import IUser from './IUser';
import ICategory from './ICategory';

export default interface IProduct {
  id: string;
  user: IUser;
  name: string;
  description: string;
  isActive: true;
  imagesIds: string[];
  cost: number;
  email: string;
  phone: string;
  location: string;
  created: string;
  category: ICategory;
}
