import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
//   template: `
//   <p> This is inline html</p>
// `,
//styleUrls: ['./home.component.scss']
styles: [`
  p {font-weight: bold}
  div {color: grey;}
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
