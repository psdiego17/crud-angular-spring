import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
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

  constructor(private coursesService: CoursesService,
    public dialog: MatDialog
    ) { 
    //this.course = []; //Caso não inicie o array na declaração, pode iniciar desse modo.
    this.course$ = this.coursesService.list()

    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos');
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }


  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg
    });
  }
}
