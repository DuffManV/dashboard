interface ICategory {
  id: number;
  label: string;
  icon?: string;
  children: ISubCategory[];
}

interface ISubCategory {
  label: string;
  icon?: string;
}

export default ICategory;
