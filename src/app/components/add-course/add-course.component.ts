import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  id: any;
  addCourseForm: FormGroup;
  course: any = {};
  title: any;
  imagePreview:string;
  constructor(private courseService: CourseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.addCourseForm = this.formBuilder.group({
      name: [''],
      description: [''],
      trainerName: [''],
      price: [''],
      startAt: [''],
      capacity: [''],
      image: [''],
    })

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.courseService.getCourseById(this.id).subscribe(
        (data) => {
          this.course = data.course;
        }
      )
      this.title = "edit";
    } else {
      this.title = "Add";
    }

  }

  addEditCourse() {
    if (this.id) {
      this.courseService.editCourse(this.course).subscribe(
        (data)=>{
          console.log('Edited with success'); 
          this.router.navigate(['admin']);
          console.log('information :', data.message);
        }
      )
    } else {
      console.log('this is my course ', this.course);
      this.courseService.addCourse(this.course,this.addCourseForm.value.image).subscribe(
        ()=>{
          console.log('Added with success');
          this.router.navigate(['admin']);
        }
      )
    }
  }


  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here my file', file);
    
    this.addCourseForm.patchValue({ image: file });
    this.addCourseForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; 
    reader.readAsDataURL(file);
  }



}
