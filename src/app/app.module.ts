import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { LessonListPageComponent } from './lesson-list-page/lesson-list-page.component';
import { LessonDetailPageComponent } from './lesson-detail-page/lesson-detail-page.component';
import { TestPage1Component } from './test-page1/test-page1.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    MenuNavBarComponent,
    LessonSearchPageComponent,
    LessonListPageComponent,
    LessonDetailPageComponent,
    TestPage1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
