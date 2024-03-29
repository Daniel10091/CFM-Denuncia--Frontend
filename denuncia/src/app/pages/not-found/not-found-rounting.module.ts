import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const NOTFOUND_ROUTES: Routes = [
  { path: '', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(NOTFOUND_ROUTES)],
  exports: [RouterModule]
})
export class NotFoundRountingModule { }
