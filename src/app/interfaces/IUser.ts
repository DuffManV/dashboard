export default interface IUser {
  id: string;
  name: string;
  role: string;
  adverts: string[] | undefined;
  registeredTime: string;
}
