import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {


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

  constructor() { }
}
