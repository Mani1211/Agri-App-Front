import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { MatInputModule,MatDatepickerModule,MatNativeDateModule,MatCardModule,MatSelectModule,MatCheckboxModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatSortModule} from '@angular/material/sort'; 
import {MatDialogModule} from '@angular/material/dialog'; 

const MaterialComponents = [
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule
]     

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule { }