import { CommonModule } from '@angular/common'
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-courses',
  imports: [CommonModule, CourseDetailComponent, MatCardModule, NgbAccordionModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  courses = [
  { name: 'Yoga für Anfänger',
      beschreibung: 'Einführung in die Grundlagen des Yoga',
      dauer: '60 Minuten',
      preis: '10 Euro',
  },
  { name: 'Fortgeschrittenes Yoga',
      beschreibung: 'Vertiefung der Yoga-Techniken',
      dauer: '90 Minuten',
      preis: '15 Euro',

  },
  { name: 'Meditation für Anfänger',
      beschreibung: 'Grundlagen der Meditation',
      dauer: '30 Minuten',
      preis: '5 Euro',
  },
  { name: 'Atemtechniken',
      beschreibung: 'Einführung in verschiedene Atemtechniken',
      dauer: '45 Minuten',
      preis: '8 Euro',  
    },
]

selectedCourse: any;
courseClicked(course: any) {
  this.selectedCourse = course;
}

handleMessage(message: any) {
  console.log(message);
}
}
