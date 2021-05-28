import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { EventsService } from './events.service';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [SubscribeComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventsRoutingModule,
  ],
  providers: [EventsService],
})
export class EventsModule {}
