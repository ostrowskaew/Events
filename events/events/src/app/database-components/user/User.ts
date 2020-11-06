import { Nationality } from '../nationality/Nationality';

export class User {
  idUser: number;
  email: string;
  username: string;
  password: string;
  token: string;
  nameUser: string;
  surname: string;
  idPassport: string;
  cardNum: string;
  phoneNum: string;
  sex: string;
  nationality: Nationality;
}
