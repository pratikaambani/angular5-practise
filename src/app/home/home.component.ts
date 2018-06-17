import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//   template: `
//   <p> This is inline html</p>
// `,
styleUrls: ['./home.component.scss'],
// styles: [`
//   p {font-weight: bold}
//   div {color: grey;}
// `]
animations: [
  trigger('goals', [
    transition('* => *', [
      query(':enter', style({opacity: 0}), {optional: true}),
      query(':enter', stagger('300ms', [
        animate('.6s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%', offset: 0}),
          style({opacity: 0.5, transform: 'translateY(35px', offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0', offset: 1}),
        ]) )
      ]),{optional: true})
    ])
  ])
]
})
export class HomeComponent implements OnInit {

  PSID: number = 44128778;
  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  goals = ['First', 'Second', 'Third'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
