import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInterface } from '../model/course-interface';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  course$: Observable<CourseInterface[]>;

  displayedColumns = ['_id', 'name', 'category']; //'actions'

  constructor(private coursesService: CoursesService) { 
    //this.course = []; //Caso não inicie o array na declaração, pode iniciar desse modo.
    this.course$ = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
