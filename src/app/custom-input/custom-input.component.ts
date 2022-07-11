import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormGroup,
  Validator,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'custom-input',
  template: `
  <ng-container [formGroup]="customInputForm">
    <div class="row">
      <label for="cnumberid"> Number Input </label>
        <input id="cnumberid" type="number" formControlName="cnumber">
    </div>
  </ng-container>
  `,
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent
  implements OnInit, ControlValueAccessor, Validator
{
  public customInputForm: FormGroup = new FormGroup({
    cnumber: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit() {}

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.customInputForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    console.log('on change');
    this.customInputForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    console.log('on blur');
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.customInputForm.disable() : this.customInputForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Custom Input validation', c);
    return this.customInputForm.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: 'customInputForm fields are invalid',
          },
        };
  }
}
