import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifiactionimage',
  templateUrl: './notifiactionimage.page.html',
  styleUrls: ['./notifiactionimage.page.scss'],
})
export class NotifiactionimagePage implements OnInit {
  titlenoti:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      const data = JSON.parse(params['data']);
      this.titlenoti = data;
    });
  }

}
