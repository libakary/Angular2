/* andmed...? */
import { Component, OnInit } from '@angular/core';
import { Introduction } from '../models/introduction.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  intros: Introduction[] = [
    {
      id: 1,
      fullname: 'Karol Kaljuste',
      email: 'karolkaljuste@gmail.com',
      phoneNumber: 53958803,
      dateOfBirth: new Date('08/10/2001'),
      school: 'Tallinna Tööstushariduskeskus',
      isActive: 'occasionally',
      photoPath: 'assets/images/karu.png',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
