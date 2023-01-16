import {Component, Input} from '@angular/core';
import {CarPart} from "../../model/carPart/car-part";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CarPartAddComponent} from "../car-part-add/car-part-add.component";
import {InvoiceAddComponent} from "../invoice-add/invoice-add.component";

@Component({
  selector: 'app-car-part-card',
  templateUrl: './car-part-card.component.html',
  styleUrls: ['./car-part-card.component.scss']
})
export class CarPartCardComponent {
  @Input()
  carPart: CarPart | undefined;

  constructor(private dialog: MatDialog) {
  }
  openAddInvoice(carPart: CarPart) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      carPart
    }

    const dialogRef = this.dialog.open(InvoiceAddComponent,{
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
