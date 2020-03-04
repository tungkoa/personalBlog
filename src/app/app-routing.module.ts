import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'top', pathMatch: 'full'},
  { path: 'top' , component: TopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
