import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';

export interface TableElement {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: TableElement[] | undefined;
  col: string[] = ['id', 'name', 'email', 'website'];
  
  dataSource = new MatTableDataSource<TableElement>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private restApiService: AppService) {
    this.restApiService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<TableElement>(res);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }
}
