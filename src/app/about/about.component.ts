import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private aboutService: AboutService) { }
  
  branches = [];

  ngOnInit() {
    console.log("testing 1")
    this.aboutService.getBranches().subscribe(res => {
      console.log("testing 1")
      this.branches = res.slice();
    }, err => {
      alert('Cannot get branches from server')
    });
  }
}
