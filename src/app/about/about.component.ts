import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log('Bingo!! We were successfully able to retrieve value from query parameter: ' +res.id));
  }
  
  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
