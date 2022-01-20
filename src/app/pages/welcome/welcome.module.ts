import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { WeatherApiService } from 'src/app/weather-api.service';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [WelcomeRoutingModule,

    NzLayoutModule,
    NzMenuModule, NzButtonModule, NzProgressModule, NzCardModule, NzDescriptionsModule,
    NzGridModule, NzDropDownModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers: [WeatherApiService, DatePipe],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule { }
