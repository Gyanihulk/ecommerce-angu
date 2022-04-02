import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-first',
  templateURL: './first.component.html',
  styleURLs: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  let parameterValue=0;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(parameter => {
      this.parameterValue =  parameter['parameter']
      
    })

  }
}
