import { Component, OnInit , ViewChild,AfterViewInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import readXlsxFile from 'read-excel-file';
import { Currency } from 'src/app/models/currency';
import {CurrencyService } from '../../services/currency.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    
  ];

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
   // this.dataSource.paginator = this.paginator;

   console.log("@@@@@",);

    this.ELEMENT_DATA.push(
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    );
  }

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        console.log(row);
        this.selection.select(row);
      });
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: PeriodicElement): string {
  console.log(row);
  if (!row) {
    console.log('if........row',row);
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }

  console.log('.............this.selection.....',this.selection.isSelected(row));
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

ngAfterViewInit() {
  this.paginator.page.subscribe(
     (event) => console.log("..............@@@@@@@@@@@@@@@@@@@@@@@@..................",event.pageSize)
);
  }

  upload($event){
    
    readXlsxFile($event.target.files[0]).then((rows) => {
      // `rows` is an array of rows
      // each row being an array of cells.
      console.log("....................@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",rows);
      //confirm header first
      console.log("^^^^^^^^^^^",rows[0][1]);
      if(rows[0][0]=='date' && rows[0][1] == 'fromCurrency' && rows[0][2] =='toCurrency' && rows[0][3] =='conversionRate' ){

        rows.forEach(element => {
          console.log("rows.....",element[0]);
          if(element[0]=='date'){

          }else{

            console.log("$$$$$$$$$$$$",new Date(element[0]));
            let currency = new Currency(new Date(element[0]),element[1],element[2],element[3], 'system');
            this.currencyService.addCurrency(currency);
          }
          // element.forEach(element => {
          //   console.log("coulumn...",element);

          // });
        });
      }else{
        confirm("Header should be :: date fromCurrency toCurrency conversionRate")
      }
    })
  }
}
