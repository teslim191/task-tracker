import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskItemsComponent } from './components/task-items/task-items.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  {path:'', component: TaskItemsComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
