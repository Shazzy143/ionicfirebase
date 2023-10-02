import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-rollno',
  templateUrl: './rollno.page.html',
  styleUrls: ['./rollno.page.scss'],
})
export class RollnoPage implements OnInit {
  data:any;
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  callname(da:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: da,
      }
    };
    this.router.navigate(['/showrolnopage'],navigationExtras);
  }

}
