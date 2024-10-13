interface ICreateAdvert {
  name: string;
  description: string;
  cost: string;
  images: any;
  email: string;
  phone: string;
  location: { name: string; code: string };
  categories: any;
}

export default ICreateAdvert;
