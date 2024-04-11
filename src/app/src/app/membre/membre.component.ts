import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Member } from 'src/Modeles/Membre';
import { MembreService } from 'src/Services/membre.service';
import { GLOBAL } from '../app-config';
import { ConfirmeDialogComponent } from '../confirme-dialog/confirme-dialog.component';


@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent {
  constructor(private MS:MembreService, private router:Router, private dialog:MatDialog){}
  displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];
  dataSource:Member[]=this.MS.tab;
  onDelete(id:string):void{
    //lancer la boite 
    let dialogRef = this.dialog.open(ConfirmeDialogComponent, {
      height: '200px',
      width: '300px',
    });
    //attendre le resultat
    dialogRef.afterClosed().subscribe((result) => {
      if(result)
      
      this.MS.Delete(id).subscribe(()=>{
        this.dataSource=this.MS.tab
  
      })
    })
    
  }

   

}
