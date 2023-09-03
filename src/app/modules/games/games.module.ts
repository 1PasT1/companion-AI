import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {path: '', component: GamesComponent}
]

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    SharedModule
  ],
  providers: [],
})
export class GamesModule { }
