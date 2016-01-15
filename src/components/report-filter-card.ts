/**
 * Report List handles the report listing.
 **/
import {
    Component,
    Inject,
    EventEmitter
} from "angular2/core";
import {
    ControlGroup,
    FormBuilder,
    Validators,
    AbstractControl
} from "angular2/common";

@Component({
    selector: 'report-filter-card',
    inputs: ['cardAmount'],
    outputs: ['onFilterChange'],
    template: `
        <section class="report-filter">
            <form [ngFormModel]="filterCardForm">
                <label for="numOfRowsInput">How many months of the {{cardAmount}} would you like to see?</label>
                <input
                    type="number"
                    id="numOfRowsInput"
                    min="1"
                    [ngFormControl]="numOfRows" />
            </form>
        </section>
    `
})
export class ReportFilterCard {
    filterCardForm: ControlGroup;
    numOfRows: AbstractControl;
    onFilterChange: EventEmitter<number>;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {
        this.filterCardForm = fb.group({
            'numOfRows': ['', Validators.required]
        })

        this.numOfRows = this.filterCardForm.controls['numOfRows'];

        this.numOfRows.valueChanges.subscribe( (value: string) => {
            if(Number(value) && Number(value)>=0) {
                console.log('numOfRows changed to: ', value);
                this.onFilterChange.emit(Number(value));
            }
        });

        this.onFilterChange = new EventEmitter();

    }

}