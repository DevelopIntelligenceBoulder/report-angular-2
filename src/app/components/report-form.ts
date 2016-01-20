/// <reference path="../../../node_modules/angular2/core.d.ts" />
/// <reference path="../../../node_modules/angular2/common.d.ts" />
/**
 * Report Form handles the ability to add a report.
 **/
import {
    Component,
    Inject,
    EventEmitter
} from "angular2/core";
import {
    Control,
    ControlGroup,
    FormBuilder,
    FORM_DIRECTIVES,
    Validators,
    AbstractControl
} from "angular2/common";
import {VALID} from "angular2/src/common/forms/model";

@Component({
    selector: 'report-form',
    outputs: ['onFormSubmission'],
    directives: [FORM_DIRECTIVES],
    inputs: ['isVisible'],
    template: `
        <form [ngFormModel]="repForm"
            (ngSubmit)="onSubmit(repForm.value)"
            class="report-form"
            *ngIf="isVisible">
            <fieldset><legend>Additional Report</legend>

                <label for="reportDate">Report Date:</label>
                <input
                    type="text"
                    id="reportDateInput"
                    placeholder="Report Date (i.e. 10-01-2015)"
                    [ngFormControl]="reportDate"/>

                <label for="quantity">Quantity:</label>
                <input
                    type="text"
                    id="quantityInput"
                    placeholder="Quantity of Products Sold"
                    [ngFormControl]="quantity"
                    />

                <label for="netSales">Net Sales:</label>
                <input
                    type="text"
                    id="netSalesInput"
                    placeholder="Net Sales"
                    [ngFormControl]="netSales"
                    />

                <label for="costOfGoods">Cost of Goods:</label>
                <input
                    type="text"
                    id="costOfGoodsInput"
                    placeholder="Cost of Goods"
                    [ngFormControl]="costOfGoods"
                    />

                <input type="submit" value="Submit Report" />
                <input type="button" value="clear" />

            </fieldset>
        </form>

    `
})
//@Injectable()
export class ReportForm {
    isVisible: boolean;
    repForm: ControlGroup;
    reportDate: AbstractControl;
    quantity: AbstractControl;
    netSales: AbstractControl;
    costOfGoods: AbstractControl;
    onFormSubmission: EventEmitter<Object>;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.repForm = fb.group({
            'reportDate': ['', Validators.required],
            'quantity': ['', Validators.required],
            'netSales': ['', Validators.required],
            'costOfGoods': ['', Validators.required]
        });

        this.reportDate = this.repForm.controls['reportDate'];
        this.quantity = this.repForm.controls['quantity'];
        this.netSales = this.repForm.controls['netSales'];
        this.costOfGoods = this.repForm.controls['costOfGoods'];

        this.onFormSubmission = new EventEmitter();
    }

    onSubmit(formValues: any): void {
        //Send event with form
        const report = {
            reportDate: formValues.reportDate,
            quantity: formValues.quantity,
            netSales: formValues.netSales,
            costOfGoods: formValues.costOfGoods
        }

        if (!this.hasErrors()) {
            this.onFormSubmission.emit(report);
        }

        this.clearValues();
    }

    hasErrors(): boolean {
        let hasErrors = false;
        if (this.reportDate.errors ||
                this.quantity.errors ||
                this.netSales.errors ||
                this.costOfGoods.errors) {
            hasErrors =  true;
        }
        return hasErrors;
    }

    clearValues(): void {
        (this.reportDate as Control).updateValue("");
        (this.quantity as Control).updateValue("");
        (this.netSales as Control).updateValue("");
        (this.costOfGoods as Control).updateValue("");
    }
}