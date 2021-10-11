import { Injectable } from '@angular/core';
import { CourseInterface } from '../model/course-interface';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): CourseInterface[]{
    return [
      {_id: '001', name: 'Angular', category: 'front-end'},
      {_id: '002', name: 'Java', category: 'back-end'},
      {_id: '003', name: 'SprinBoot', category: 'back-end'}
    ]
  }
}
