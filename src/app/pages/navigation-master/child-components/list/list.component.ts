import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBook } from 'src/app/core/models/books';
import { JsonLoaderService } from 'src/app/core/services/json-loader.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'type', 'content', 'created_at', 'updated_at', 'Author_Publisher'];
  dataSource: MatTableDataSource<IBook> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  bookList: IBook[] = [];

  constructor(private service: JsonLoaderService) { }

  ngOnInit(): void {
    this.getBookList();
    this.dataSource = new MatTableDataSource(this.bookList);
    this.sortingDataAccessor();
    this.filterDataAccessor();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBookList() {
    this.service.getJSON().subscribe((response: any) => {
      this.bookList = response.data;
      console.log(response.data, 'response');
    })

  }

  sortingDataAccessor() {
    this.dataSource.sortingDataAccessor = (item, property) => {
      if (property === 'content') {
        return item.attributes.content
      }
      switch (property) {
        case 'id':
          return item.id;
        case 'content':
          return item.attributes.content;
        case 'created_at':
          return item.attributes.created_at;
        case 'updated_at':
          return item.attributes.updated_at;
        default:
          return item.id;
      }
    };
  }

  filterDataAccessor() {
    this.dataSource.filterPredicate = (data, filter: string) => {
      return data.id.includes(filter) || data.attributes.content.toLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
