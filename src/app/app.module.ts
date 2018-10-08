import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { AdminComponent } from './admin/admin.component';
import { PinDialog } from './modals/pin/pin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    AdminComponent,
    PinDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    DragDropModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [PinDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
