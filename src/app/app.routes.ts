import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'test', component: TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
