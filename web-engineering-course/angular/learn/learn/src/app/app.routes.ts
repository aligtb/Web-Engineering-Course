import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'courses', component: CoursesComponent},
    { path: 'contact', component: ContactComponent}
];
