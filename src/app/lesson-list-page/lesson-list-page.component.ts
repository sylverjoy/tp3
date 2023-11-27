import { Component } from '@angular/core';
import { UserSettingsService } from '../user-settings.service';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})
export class LessonListPageComponent {
  onClickRefresh() {
    window.location.reload();
  }
  onClickDelete(id: number) {
    this.newdata = this.newdata.filter((item: any) => item.id !== id);
  }
  newdata: any;
  constructor(private _apiservice: ApiserviceService) {}

  ngOnInit(){
    this._apiservice.getdata().subscribe(res=> {
      this.newdata = res;
    })
  }

}
