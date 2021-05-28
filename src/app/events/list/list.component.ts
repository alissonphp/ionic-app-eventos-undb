import { Component, OnInit } from '@angular/core';
import { IEvent } from '../event.interface';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  events: IEvent[];

  constructor(private readonly $service: EventsService) {}

  ngOnInit() {
    setTimeout(() => {
      this.events = this.$service.getEvents();
    }, 2000);
  }

  doRefresh($event) {
    this.events = null;
    this.ngOnInit();
    $event.target.complete();
  }
}
