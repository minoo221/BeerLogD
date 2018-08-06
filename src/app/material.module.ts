import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatDividerModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule, MatCheckboxModule, MatRadioModule, MatTabsModule, MatFormFieldControl } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatDividerModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule, MatCheckboxModule, MatRadioModule, MatTabsModule],
    exports: [MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatListModule, MatDividerModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule, MatCheckboxModule, MatRadioModule, MatTabsModule,]
})
export class MaterialModule { }