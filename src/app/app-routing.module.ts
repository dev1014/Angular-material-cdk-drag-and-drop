import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragDropComponent } from "./components/drag-drop/drag-drop.component";


const routes: Routes = [
  {
    path: 'drag',
    component: DragDropComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
