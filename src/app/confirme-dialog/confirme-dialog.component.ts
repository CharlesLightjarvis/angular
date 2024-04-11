import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirme-dialog',
  templateUrl: './confirme-dialog.component.html',
  styleUrls: ['./confirme-dialog.component.css']
})
export class ConfirmeDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmeDialogComponent>) { }
  title="are you sure ?"
  content="do you really want to delete this item ?"
  Cancel="Cancel"
  Delete="Delete"

}
