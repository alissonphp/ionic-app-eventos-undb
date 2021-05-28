import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IEvent } from '../event.interface';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  subscriber: FormGroup;
  events: IEvent[];

  constructor(
    private readonly $service: EventsService,
    public toastCtrl: ToastController,
    public router: Router
  ) {
    this.subscriber = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      event: new FormControl('', []),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {
    this.events = this.$service.getEvents();
  }

  onChange($event) {
    this.event.setValue($event.detail.value);
  }

  get fullname(): AbstractControl {
    return this.subscriber.get('fullname');
  }
  get email(): AbstractControl {
    return this.subscriber.get('email');
  }
  get phone(): AbstractControl {
    return this.subscriber.get('phone');
  }
  get birth(): AbstractControl {
    return this.subscriber.get('birth');
  }
  get document(): AbstractControl {
    return this.subscriber.get('document');
  }
  get event(): AbstractControl {
    return this.subscriber.get('event');
  }
  get password(): AbstractControl {
    return this.subscriber.get('password');
  }

  async onSubmit(): Promise<void> {
    this.$service
      .addParticipant(
        {
          fullname: this.fullname.value,
          email: this.email.value,
          birth: this.birth.value,
          document: this.document.value,
        },
        this.event.value
      )
      .then(async (_) => {
        const toast = await this.toastCtrl.create({
          message: 'Your subscription was registered with successs! Thanks',
          duration: 3000,
          color: 'success',
        });
        await toast.present();
        this.router.navigate(['/events/list']);
      });
  }
}
