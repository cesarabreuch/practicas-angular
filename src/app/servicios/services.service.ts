import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ServicesService {


  // propiedad con la url del endpoint

  private url = 'https://jsonplaceholder.typicode.com/posts';

  public carList = [
    {type: 'sedan', doors: 5},
    {type: 'sedan', doors: 5},
    {type: 'sedan', doors: 4},
    {type: 'sedan', doors: 4},
    {type: 'sedan', doors: 4},
    {type: 'truck', doors: 2},
    {type: 'hatchback', doors: 5},
    {type: 'SUV', doors: 7},
    {type: 'truck', doors: 2}
  ]


  constructor(private http: HttpClient) {
    console.log(this.carList);
  }

  // metodo get

  public getPosts() {
    return this.http.get(this.url);
  }


}
