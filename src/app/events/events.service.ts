import { Injectable } from '@angular/core';
import { IEvent, IParticipant } from './event.interface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  getEvents(): IEvent[] {
    return JSON.parse(localStorage.getItem('events'));
  }
  async addParticipant(
    participant: IParticipant,
    title: string
  ): Promise<void> {
    let events: IEvent[] = this.getEvents();
    const event: IEvent = await this.search(title);
    events = await this.remove(event);
    event.participants.push(participant);
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
  }

  async remove(event: IEvent): Promise<IEvent[]> {
    const events: IEvent[] = this.getEvents();
    const index = events.findIndex((e) => {
      return e.title === event.title;
    });
    events.splice(index, 1);
    return events;
  }

  async search(title: string): Promise<IEvent> {
    return this.getEvents().filter((e) => {
      return e.title === title;
    })[0];
  }
}
