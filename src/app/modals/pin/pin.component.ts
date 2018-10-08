import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinDialog {

  constructor(
    public dialogRef: MatDialogRef<PinDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  pinInput = '';

  Cancel(): void {
    this.dialogRef.close(false);
  }

  Enter(): void {
    this.dialogRef.close(true);
  }

  keypress(num: string): void {
    if(num === 'clear') {
      this.pinInput = '';
    } else if (num === 'back') {
      this.pinInput = this.pinInput.substr(0, this.pinInput.length - 1);
    } else {
      if(this.pinInput.length < 4) {
        this.pinInput += num;
      }
    }
    
  }

  keys: key[] = [
    {num: 1, cols: 1, subtext: ""},
    {num: 2, cols: 1, subtext: "abc"},
    {num: 3, cols: 1, subtext: "def"},
    {num: 4, cols: 1, subtext: "ghi"},
    {num: 5, cols: 1, subtext: "jkl"},
    {num: 6, cols: 1, subtext: "mno"},
    {num: 7, cols: 1, subtext: "pqrs"},
    {num: 8, cols: 1, subtext: "tuv"},
    {num: 9, cols: 1, subtext: "wxyz"}
  ]
}

interface key {
  cols: number;
  num: number;
  subtext: string;
}