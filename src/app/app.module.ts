import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventsComponent } from './components/events/events.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { AdminComponent } from './components/admin/admin.component';
import { CourseComponent } from './components/course/course.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    WelcomeComponent,
    HomeComponent,
    CoursesComponent,
    TrainersComponent,
    AddCourseComponent,
    AddTrainerComponent,
    AdminComponent,
    CourseComponent,
    CourseInfoComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
