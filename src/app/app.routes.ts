import { Routes } from '@angular/router';
import { TableViewComponent } from './dynamic-table/table-view/table-view.component';
import { TableItemViewComponent } from './dynamic-table/table-item-view/table-item-view.component';

export const routes: Routes = [
  {
    path: 'table',
    component: TableViewComponent
  },
  {
    path: '**',
    redirectTo: 'table'
  }
];
