import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tollbar',
  templateUrl: './tollbar.component.html',
  styleUrls: ['./tollbar.component.scss']
})
export class TollbarComponent implements OnInit {

  public appName:string='ngBlog';

  constructor() { }

  ngOnInit(): void {
  }

}
