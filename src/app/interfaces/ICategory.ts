interface ICategory {
  id: string;
  label?: string;
  parentId: string;
  children?: ICategory[];
  name: string;
}

export default ICategory;
