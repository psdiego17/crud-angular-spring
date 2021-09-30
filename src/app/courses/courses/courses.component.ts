import { Component, OnInit } from '@angular/core';
import { CourseInterface } from '../model/course-interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  course: CourseInterface[] = [
    {_id: '001', name: 'Angular', category: 'front-end'},
    {_id: '002', name: 'Java', category: 'back-end'}
  ];

  displayedColumns = [] = ['_id', 'name', 'category'];

  constructor() { 
    //this.course = []; //Caso não inicie o array na declaração, pode iniciar desse modo.
  }

  ngOnInit(): void {
  }

}
