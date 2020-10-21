import { Nationality } from '../nationality/Nationality';

export interface User {
  idUser: number;
  nameUser: String;
  surname: String;
  idPassport: String;
  cardNum: String;
  phoneNum: String;
  sex: String;
  nationality: Nationality;
}
