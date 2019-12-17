import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  providers: [ServicesService]
})
export class ServiciosComponent implements OnInit {

  constructor(public service: ServicesService) { }

  ngOnInit() {
  }

}
