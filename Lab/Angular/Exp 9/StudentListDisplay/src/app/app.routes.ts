import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { ListStudent } from '../list-student/list-student';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"list-student",component:ListStudent}
];
