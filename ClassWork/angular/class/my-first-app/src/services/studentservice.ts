import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  students =[
    {name: 'Shravani',age:22,course:'CE'},
    {name: 'Omkar',age:20,course:'IT'},
    {name: 'Tejas',age:22,course:'ME'},

  ];
  getStudent()
  {
    return this.students;
  }
  getStudents(){
  return this.students;
}
constructor (private studentService : StudentService) {}
ngOnInit(){
  this.students = this.studentService.getStudents();
  console.log(this.students);
}
  
}
}
