import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTextComponent } from './child-components/custom-text/custom-text.component';
import { ListComponent } from './child-components/list/list.component';
import { NavigationMasterComponent } from './navigation-master.component';

const routes: Routes = [

  {
    path: "",
    component: NavigationMasterComponent,
    children: [
      {
        path: "list",
        component: ListComponent,
        pathMatch: "full",
      },
      {
        path: "custom-text",
        component: CustomTextComponent,
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full",
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationMasterRoutingModule { }
