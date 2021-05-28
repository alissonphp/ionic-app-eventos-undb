export interface IEvent {
  title: string;
  date: string;
  speaker: string;
  done: boolean;
  participants?: IParticipant[];
}

export interface IParticipant {
  fullname: string;
  birth: string;
  document: string;
  email: string;
}
