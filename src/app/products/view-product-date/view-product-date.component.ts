import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-product-date',
  templateUrl: './view-product-date.component.html',
  styleUrls: ['./view-product-date.component.css']
})
export class ViewProductDateComponent implements OnInit {
productID=0;
  constructor(private activatedRoute: ActivatedRoute) { }

   ngOnInit():void{
    
    }
    

  } 
   

