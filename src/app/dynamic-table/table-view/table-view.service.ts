import { Injectable } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { ApiService } from '../../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class TableViewService {

  constructor(private apiService: ApiService) { }

  getSampleData() {
    const url = AppSettings.API.GET_DATA_LIST;
    return this.apiService.callApi({ url, method: 'GET' });
  }
}
