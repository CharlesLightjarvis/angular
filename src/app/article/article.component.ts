import { Component, OnInit } from '@angular/core';
import { Article } from 'src/Modeles/Article';
import { ArticleService } from 'src/Services/article.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ArticleFormComponent } from '../article-form/article-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements AfterViewInit, OnInit {
  constructor(
    private A: ArticleService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) {}
  displayedColumns: string[] = [
    'id',
    'type',
    'titre',
    'lien',
    'date',
    'sourcepdf',
  ];

  ngOnInit() {
    this.GET();
  }

  dataSource = new MatTableDataSource<Article>();

  GET(): void {
    this.A.GETALL().subscribe((r) => {
      this.dataSource = new MatTableDataSource<Article>(r);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ArticleFormComponent, dialogConfig);
  }
}
