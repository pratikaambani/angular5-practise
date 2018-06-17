import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//   template: `
//   <p> This is inline html</p>
// `,
styleUrls: ['./home.component.scss']
// styles: [`
//   p {font-weight: bold}
//   div {color: grey;}
// `]
})
export class HomeComponent implements OnInit {

  PSID: number = 44128778;
  itemCount: number;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';
  goals = [];

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
