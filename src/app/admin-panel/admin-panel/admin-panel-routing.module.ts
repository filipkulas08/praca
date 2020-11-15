import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddLevelsComponent } from './add-levels/add-levels.component';
import { AddComponent } from './add/add.component';
import { AdminPanelComponent } from './admin-panel.component';
import { CategoryComponent } from './category/category.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LevelsComponent } from './levels/levels.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: '/words'
   },

  {
    path: 'words',
    component: AdminPanelComponent,
  },

  {
     path: 'addWord',
    component: AddComponent,
   },

  { 
    path: 'category',
    component: CategoryComponent,
   },

  {
     path: 'addCategory',
    component: AddCategoryComponent,
   },

  { 
    path: 'levels',
    component: LevelsComponent,
   },

  {
     path: 'addLevels',
    component: AddLevelsComponent
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
