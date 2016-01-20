/// <reference path="../../../node_modules/angular2/core.d.ts" />
/**
 * Report Control allows for the hiding/showing of the form component.
 */
import {
    Component,
    EventEmitter
} from "angular2/core";

@Component({
    selector: 'report-form-control',
    outputs: ['onFormVisibilityChanged'],
    template: `
        <header class="report-form-control">
            <h3>Want to add another report?</h3>
            <div class="control-button-wrapper">
                <button
                    class="primary-button"
                    *ngIf="!isExpanded"
                    (click)="toggleForm()">Add One</button>
                <button
                    *ngIf="isExpanded"
                    (click)="toggleForm()">Hide</button>
            </div>
        </header>
    `
})
export class ReportFormControl {
    isExpanded: boolean;
    onFormVisibilityChanged: EventEmitter<boolean>;

    constructor() {
        this.isExpanded = false;
        this.onFormVisibilityChanged = new EventEmitter();
    }

    toggleForm() {
        this.isExpanded = !this.isExpanded;
        this.onFormVisibilityChanged.emit(this.isExpanded);
    }
}
