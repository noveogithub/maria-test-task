import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Call } from '../types';

@Component({
  selector: 'noveo-call-profile-dumb',
  templateUrl: './call-profile.component.html',
  styleUrls: ['./call-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallProfileComponent implements OnInit, OnDestroy {
  @Output() save: EventEmitter<Call> = new EventEmitter();
  @Output() setUnsavedChanges: EventEmitter<boolean> = new EventEmitter();
  @Output() setEditable: EventEmitter<boolean> = new EventEmitter();

  @Input() dateFormat = 'MMM d, y, HH:mm:ss';
  @Input() dateParseFormat: string;
  @Input() loading: boolean;
  @Input() saving: boolean;
  @Input() editable: boolean;
  @Input() unsavedChanges: boolean;
  @Input()
  set call(call: Call) {
    this._call = call;
    this.editable = false;
    this.form.reset();
  }
  get call(): Call {
    return this._call;
  }

  form: FormGroup;
  callWrapups: FormArray;
  private _call: Call;
  private _subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this._subscription.add(
      this.form.valueChanges.pipe(
        map(() => this.form.dirty),
        distinctUntilChanged(),
      ).subscribe(isDirty => this.setUnsavedChanges.emit(isDirty)),
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  resetForm() {
    this.form.reset();
    this.form.updateValueAndValidity();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      callWrapups: this.formBuilder.array([
        this.formBuilder.group({
          wrapupId: [undefined, Validators.required],
          wrapupName: [undefined, Validators.required],
          wrapupComment: [undefined, Validators.required],
        }),
      ]),
    });
    this.callWrapups = <FormArray>this.form.get('callWrapups');
  }

  onEdit() {
    // TODO: fix nested wrapNames
    const wrapups = {
      callWrapups: this.call.callWrapups.map(wrapup => ({
        wrapupId: wrapup.wrapupId,
        wrapupName: wrapup.wrapupName,
        wrapupComment: wrapup.wrapupComment,
      })),
    };
    this.form.setValue(wrapups);

    this.setEditable.emit(true);
  }

  onSave() {
    const value = this.form.value;
    const updatedWrapups = value.callWrapups.reduce((acc, wrapup) => ({
      ...acc,
      [wrapup.wrapupId]: wrapup,
    }), {});
    const call = {
      ...this.call,
      callWrapups: this.call.callWrapups.map(wrapup => updatedWrapups[wrapup.wrapupId]
        ? { ...wrapup, ...updatedWrapups[wrapup.wrapupId] }
        : wrapup,
      ),
    };

    this.save.emit(call);
  }

  onCancel() {
    this.resetForm();
    this.setUnsavedChanges.emit(false);
    this.setEditable.emit(false);
  }
}
