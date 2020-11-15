import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import {
  SpeechSynthesisModule,
} from '@kamiazya/ngx-speech-synthesis';

import { LearnRoutingModule } from './learn-routing.module';
import { WordComponent } from './word/word.component';
import { TestComponent } from './test/test.component';
import { CrosswordHumanComponent } from './crossword-human/crossword-human.component';


@NgModule({
  declarations: [WordComponent, TestComponent, CrosswordHumanComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    CommonModule,FormsModule,
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
    exports: [WordComponent,TestComponent,CrosswordHumanComponent],
  
})
export class LearnModule { }
