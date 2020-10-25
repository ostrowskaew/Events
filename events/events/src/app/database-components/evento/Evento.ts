
export interface Evento {
  idEvento : string;
  nameEvento : string;
  dateStart : Date;
  dateEnd: Date;
  meetingPlace: string;
  numPlaces: number;
  included: string;
  notIncluded: string;
  schedule: string;
  description: string;
}
