import { Show } from './showModel';

export interface Ticket {
  id: string;
  creationTime: Date;
  isSolved: boolean;
  show: Show;
}
