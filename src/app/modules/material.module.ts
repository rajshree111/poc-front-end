import { NgModule} from '@angular/core';
import { MatMenuModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { CanDisable} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  imports: [MatMenuModule,MatSelectModule,MatFormFieldModule,MatProgressSpinnerModule,ScrollDispatchModule,DragDropModule,MatInputModule ],
  exports: [MatMenuModule,MatSelectModule,MatFormFieldModule,MatProgressSpinnerModule,ScrollDispatchModule,DragDropModule,MatInputModule ]
})
export class MaterialModule {

}