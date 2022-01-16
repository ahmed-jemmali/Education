import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() courseInput: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  countStudents(x) {
    return (x >= 2) ? 'students' : 'student';
  }

  goToInfo(id: any) {
    this.router.navigate([`course-info/${id}`])
  }
}
