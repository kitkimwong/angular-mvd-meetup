import { DistancePipe } from './pipes/distance.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupGroupComponent } from './meetup-group/meetup-group.component';

import { CardModule, IonicModule } from 'ionic-angular';
import { MeetupEventComponent } from './meetup-event/meetup-event.component';
import { MeetupNavbarComponent } from './meetup-navbar/meetup-navbar.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    DistancePipe,
    MeetupGroupComponent,
    MeetupEventComponent,
    MeetupNavbarComponent
  ],
  exports: [
    MeetupGroupComponent,
    MeetupEventComponent,
    DistancePipe,
    MeetupNavbarComponent
  ],
  providers: []
})
export class ShareModule { }