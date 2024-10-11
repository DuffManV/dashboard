export default interface ICategory {
  id: string;
  label?: string;
  parentId: string;
  children?: ICategory[];
  name: string;
}
