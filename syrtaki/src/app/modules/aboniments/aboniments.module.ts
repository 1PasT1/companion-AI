import { NgModule } from '@angular/core';
import { AbonimentsComponent } from './aboniments.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
const routes: Routes = [
    {path: '', component: AbonimentsComponent}
]

@NgModule({
  declarations: [
    AbonimentsComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule
    ],
  providers: [],
})
export class AbonimentsModule { }
