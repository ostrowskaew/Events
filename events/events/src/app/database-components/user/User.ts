import { Nationality } from '../nationality/Nationality';

export interface User {
  email: String;
  password: String;
  nameUser: String;
  surname: String;
  idPassport: String;
  cardNum: String;
  phoneNum: String;
  sex: String;
  nationality: Nationality;
}
