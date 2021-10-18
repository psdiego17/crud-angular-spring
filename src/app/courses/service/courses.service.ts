import { Injectable } from '@angular/core';
import { CourseInterface } from '../model/course-interface';

import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    
    return this.httpClient.get<CourseInterface[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}
