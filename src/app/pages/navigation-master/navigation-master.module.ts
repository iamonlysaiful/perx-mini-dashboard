import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './child-components/list/list.component';
import { CustomTextComponent } from './child-components/custom-text/custom-text.component';
import { NavigationMasterComponent } from './navigation-master.component';
import { NavigationMasterRoutingModule } from './navigation-master-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  declarations: [
    NavigationMasterComponent,
    ListComponent,
    CustomTextComponent
  ],
  imports: [
    CommonModule,
    NavigationMasterRoutingModule,
    ...MATERIAL_MODULES
  ]
})
export class NavigationMasterModule { }
