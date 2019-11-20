import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotoRoutingModule } from './foto-routing.module';
import { FotoComponent } from './foto.component';

@NgModule({
  declarations: [FotoComponent],
  imports: [
    CommonModule,
    FotoRoutingModule
  ]
})
export class FotoModule { }
