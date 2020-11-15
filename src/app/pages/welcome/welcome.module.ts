import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import {
  SpeechSynthesisModule,
} from '@kamiazya/ngx-speech-synthesis';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule,FormsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    SpeechSynthesisModule.forRoot({
      lang: 'en',
      volume: 1.0,
      pitch: 1.0,
      rate: 1.0,
    }),],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  
})
export class WelcomeModule { }
