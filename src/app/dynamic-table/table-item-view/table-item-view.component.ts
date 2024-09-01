import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { SanitizeHtml } from '../../shared/sanitize-html.pipe';

@Component({
  selector: 'app-table-item-view',
  standalone: true,
  imports: [TitleCasePipe, SanitizeHtml],
  templateUrl: './table-item-view.component.html',
  styleUrl: './table-item-view.component.css'
})
export class TableItemViewComponent {
  @Input() itemDetails: any;
  @Input() headers!: Array<any>;
  @Output() onBack: EventEmitter<boolean> = new EventEmitter<boolean>();
  Object = Object;

  onNavBack() {
    this.onBack.emit(true);
  }
}
