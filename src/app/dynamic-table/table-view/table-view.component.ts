import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditableContentDirective } from '../../shared/editable-content.directive';
import { SanitizeHtml } from '../../shared/sanitize-html.pipe';
import { TableViewService } from './table-view.service';
import { RouterModule } from '@angular/router';
import { TableItemViewComponent } from '../table-item-view/table-item-view.component';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [FormsModule, RouterModule, EditableContentDirective, TableItemViewComponent],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent implements OnInit {
  value: string = 'dsafasd';
  spinner: boolean = false;
  dataList: Array<any> = [];
  tableHeaders: Array<any> = [];
  tableWidth: number = 0;
  currentViewItem: any = null;


  constructor(private tableViewService: TableViewService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.spinner = true;
    this.resetTableData();
    this.tableViewService.getSampleData().subscribe({
      next: (value: any) => {
        console.log('data in getSampleData', value);
        this.dataList = value;
        this.preapareTableHeaders();
        this.spinner = false;
      },
      error: (error: any) => {
        this.spinner = false;
      }
    })
  }

  resetTableData() {
    this.dataList = [];
    this.tableHeaders = [];
    this.tableWidth = 0;
  }

  preapareTableHeaders() {
    if (this.dataList.length) {
      this.tableHeaders = Object.keys(this.dataList[0]);
      this.tableWidth = (this.tableHeaders.length * 250) + 150;
    }
  }

  onViewDetails(viewItem: any) {
    this.currentViewItem = viewItem;
  }

  eventFromView(e: boolean) {
    this.currentViewItem = null;
  }
}
