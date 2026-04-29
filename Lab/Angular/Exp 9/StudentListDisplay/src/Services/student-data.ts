import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentData {
  studentList:any[] = [
    {name:"Atharv",age:20,course:"CSE"},
    {name:"Soham",age:23,course:"CSE AI/ML"},
    {name:"Shravani",age:19,course:"IT"},
    {name:"Arya",age:25,course:"AI DS"}
  ]
  getStudentList()
  {
    return this.studentList
  }
}
