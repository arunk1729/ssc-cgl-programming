import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor( public router: Router, public route: ActivatedRoute ) { }

  public gotoRoute(url: any){
    this.router.navigateByUrl(url);
  }
}
