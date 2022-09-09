import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';
import { Growth10kModule } from './growth10k/growth10k.module';
import { MetadataModule } from './metadata/metadata.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule, FirstRoutingModule, Growth10kModule, MetadataModule, ReactiveFormsModule
  ],
  exports: [FirstComponent]
})
export class FirstModule { }
