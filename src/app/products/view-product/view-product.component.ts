import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent /* implements OnInit  */{
  productid=0;
  /* constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map((d:any) => d.user));
  } */
      
      

      constructor(private activatedRoute: ActivatedRoute) { }
      ngOnInit(): void {
        this.activatedRoute.params.subscribe(data =>{
          this.productid=data['id'];
        });
    
      }
          

          

}
