import { Component } from '@angular/core';
import { ApiService } from '../api';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {

  name = "Tejaswi";
  course = "CSE-AI";

  message:any;

  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.getMessage().subscribe(data=>{
      this.message = data;
    });
  }

}