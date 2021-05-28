import { Component } from '@angular/core';
import { IEvent } from './events/event.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  events: IEvent[];
  constructor() {
    this.events = [
      {
        title: 'Ionic Week - Zero to Mobile Hero',
        date: 'May 25, 9h30 PM',
        speaker: 'Mr. Elon Musk',
        done: true,
        participants: [
          {
            fullname: 'Alisson Gomes',
            document: '123188293192',
            birth: '08/07/1991',
            email: 'alisson@alissongomes.com',
          },
        ],
      },
      {
        title: 'UX JAM - Knowing what your client think',
        date: 'May 26, 5h30 PM',
        speaker: 'Liza Simpson',
        done: false,
        participants: [],
      },
      {
        title: 'Web apps Vs. Native apps',
        date: 'May 27, 2h30 PM',
        speaker: 'Sir. Bruce Wayne',
        done: false,
        participants: [],
      },
      {
        title: 'Introduction to Capacitor integrations',
        date: 'May 28, 1h30 PM',
        speaker: 'Mr. Edson Yanaga',
        done: false,
        participants: [],
      },
    ];
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}
