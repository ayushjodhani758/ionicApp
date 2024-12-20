import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {
  @Input() hasHeader: boolean = false;
  @Input() hasFooter: boolean = false;

  @Input() status: string = '';
  @Input() updateAt: string = '';
  @Input() createdAt: string = '';
  @Input() notes: string = '';

  constructor(public router: Router) { }

  ngOnInit() {}

  gotoPickup(){
    this.router.navigateByUrl('/pickup-calls');
  }
}
