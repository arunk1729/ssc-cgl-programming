import { UtilityService } from './../../common/services/utility.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssc-main',
  templateUrl: './ssc-main.component.html',
  styleUrls: ['./ssc-main.component.scss']
})
export class SscMainComponent implements OnInit {

  constructor( public util: UtilityService ) { }

  ngOnInit() {
  }

}
