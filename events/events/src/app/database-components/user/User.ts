import { Nationality } from '../nationality/Nationality';

export class User {
  idUser: number;
  email: string;
  password: string;
  nameUser: string;
  surname: string;
  idPassport: string;
  cardNum: string;
  phoneNum: string;
  sex: string;
  nationality: Nationality;
}
