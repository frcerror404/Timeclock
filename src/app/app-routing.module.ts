import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent }      from './list-page/list-page.component';
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  { path: '**', component: ListPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}