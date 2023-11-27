import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserSettingsService } from '../user-settings.service';

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent implements OnInit, OnDestroy{
  constructor( private router: Router, private userSettingsService: UserSettingsService) {
    console.log('LessonEditComponent.constructor()');
  }
  ngOnDestroy(): void {
    console.log('LessonEditComponent.OnDestroy()');
  }
  ngOnInit(): void {
    console.log('LessonEditComponent.OnInit()');
  } 
  onClickSubmit() {
    this.userSettingsService.lastLessonId = 1234;
    this.router.navigate(['lesson-list']).then(res => {})
  }
}
