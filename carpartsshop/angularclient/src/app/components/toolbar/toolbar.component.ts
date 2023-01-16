import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CarAddComponent} from "../car-add/car-add.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private dialog: MatDialog) {
  }

  openAddCarDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {

    }

    const dialogRef = this.dialog.open(CarAddComponent,{
      width: '400px',
      height: '50%',
      data: dialogConfig.data
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result !== "cancel")
        window.location.reload();
    });
  }
}
