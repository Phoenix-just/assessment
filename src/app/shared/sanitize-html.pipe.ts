import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'sanitizeHtml', standalone: true })
export class SanitizeHtml {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html: any) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}