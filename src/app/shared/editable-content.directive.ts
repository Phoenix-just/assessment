import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appEditableContent]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditableContentDirective),
      multi: true
    }
  ]
})
export class EditableContentDirective implements ControlValueAccessor {

  private onTouched: any = () => { }
  private onChange: any = (value: string) => { };

  constructor(
    private el: ElementRef<any>,
    private renderer: Renderer2
  ) {
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
    this.renderer.setAttribute(this.el.nativeElement, 'spellcheck', 'false');
  }

  @HostListener('input')
  onInput() {
    this.onChange(this.el.nativeElement.innerHTML);
  }

  @HostListener('paste')
  onPaste() {
    this.onChange(this.el.nativeElement.innerHTML);
  }

  @HostListener('blur')
  onBlur() {
    this.onTouched();
  }

  writeValue(value: string) {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
// import { Directive, ElementRef, HostListener, Renderer2, forwardRef } from '@angular/core';
// import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

// @Directive({
//   selector: '[appEditableContent]',
//   standalone: true,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => EditableContentDirective),
//       multi: true
//     }
//   ]
// })
// export class EditableContentDirective {

//   constructor(private el: ElementRef<any>, private ngModel: NgModel, private renderer: Renderer2) {
//     this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.ngModel.control.value);
//   }

//   @HostListener('input')
//   onInput() {
//     this.ngModel.control.setValue(this.el.nativeElement.innerHTML);
//   }
// }
