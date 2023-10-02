import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callname(da:any){
    this.router.navigate(['/downloadimage']);
  }
  
}
