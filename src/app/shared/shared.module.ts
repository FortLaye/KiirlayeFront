import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from './materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxPrintModule} from "ngx-print";





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule

  ]
})
export class SharedModule { }
