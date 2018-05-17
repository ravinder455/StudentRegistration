import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  animations: [
    trigger('navState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HeaderComponentComponent implements OnInit {

  topNav = 'show';
  sideNav = 'hide';

  constructor() { }

  ngOnInit() {
  }


  toggleNav() {
    this.sideNav = this.sideNav === 'show' ? 'hide' : 'show';
    this.topNav = this.topNav === 'show' ? 'hide' : 'show';
  }

}
