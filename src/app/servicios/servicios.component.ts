import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [ServicesService]
})
export class ServiciosComponent implements OnInit {

  public posts: any = [];

  constructor(public service: ServicesService) {

  }

  ngOnInit() {

    this.service.getPosts()
        .subscribe( data => {
          for ( const i in data){
            if (data[i].userId === 7) {
               this.posts.push(data[i]);
            }
          }
          console.log(this.posts);

        });

    this.service.getPostById();


  }

}
