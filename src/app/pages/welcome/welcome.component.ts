import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from 'src/app/weather-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;

  title = 'weather';
  data: any;
  today?: string | null;

  constructor(private weatherApiService: WeatherApiService, public datepipe: DatePipe) {
  }

  ngOnInit() {
    this.today = this.datepipe.transform(new Date(), 'EEEE, MMMM d, yyyy');

    this.weatherApiService.getData('Algiers')
      .subscribe((res: any) => {
        if (res) {
          this.data = res;
          console.log('---------> ' + JSON.stringify(this.data));
          // this.loading = false;
        }
      }, (err) => {
        // this.messageService.add({ severity: 'error', summary: 'Impossible de charger les sites', detail: err.errorNumber + ' : ' + err.message });
        // this.loading = false;
      });
  }

  getData(city: string) {

    this.weatherApiService.getData(city)
      .subscribe((res: any) => {
        if (res) {
          this.data = res;
          console.log('---------> ' + JSON.stringify(this.data));
          // this.loading = false;
        }
      }, (err) => {
        // this.messageService.add({ severity: 'error', summary: 'Impossible de charger les sites', detail: err.errorNumber + ' : ' + err.message });
        // this.loading = false;
      });
  }
}
