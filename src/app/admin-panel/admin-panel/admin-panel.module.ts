import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LevelsComponent } from './levels/levels.component';
import { AddLevelsComponent } from './add-levels/add-levels.component';


@NgModule({
  declarations: [AdminPanelComponent,  AddComponent, CategoryComponent, AddCategoryComponent, LevelsComponent, AddLevelsComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule
  ],
  exports: [AdminPanelComponent]
})
export class AdminPanelModule { }
