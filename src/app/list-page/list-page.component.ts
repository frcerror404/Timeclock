import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { PinDialog } from '../modals/pin/pin.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  success = true;

  NotHere = [
    'Chad Krause',
    'Jeff Parks',
    'Dan Story',
    'Luckett'
  ];

  Here = [
    'Jacob Dara',
    'Becky',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      const pinDialogRef = this.dialog.open(PinDialog, { width: '400px', data: {name: event.item.data, success: this.success}});
      pinDialogRef.afterClosed().subscribe(result => {
        this.success = result;
        console.log(result);
        if(!!result) {
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
        }
      });
        
    }
  }

}

