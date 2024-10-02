interface ICategory {
  id: string;
  name: string;
  parentId: string;
}

interface ISubCategory {
  label: string;
  icon?: string;
}

export default ICategory;
