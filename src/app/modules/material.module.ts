import { NgModule} from '@angular/core';
import { MatMenuModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import { MatSelectModule} from '@angular/material';
import { CanDisable} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [MatPaginatorModule,MatCheckboxModule,MatTableModule,MatMenuModule,MatSelectModule,MatFormFieldModule,MatProgressSpinnerModule,ScrollDispatchModule,DragDropModule,MatInputModule ],
  exports: [MatPaginatorModule,MatCheckboxModule,MatTableModule,MatMenuModule,MatSelectModule,MatFormFieldModule,MatProgressSpinnerModule,ScrollDispatchModule,DragDropModule,MatInputModule ]
})
export class MaterialModule {

}