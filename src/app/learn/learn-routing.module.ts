import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrosswordHumanComponent } from './crossword-human/crossword-human.component';
import { TestComponent } from './test/test.component';
import { WordComponent } from './word/word.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/words' },
  { path: 'word', component: WordComponent },
  { path: 'test', component: TestComponent },
  { path: 'crossword-human', component: CrosswordHumanComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
