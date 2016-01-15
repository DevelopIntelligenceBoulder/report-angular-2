var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Report List handles the report listing.
 **/
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var ReportFilterCard = (function () {
    function ReportFilterCard(fb) {
        var _this = this;
        this.filterCardForm = fb.group({
            'numOfRows': ['', common_1.Validators.required]
        });
        this.numOfRows = this.filterCardForm.controls['numOfRows'];
        this.numOfRows.valueChanges.subscribe(function (value) {
            if (Number(value) && Number(value) >= 0) {
                console.log('numOfRows changed to: ', value);
                _this.onFilterChange.emit(Number(value));
            }
        });
        this.onFilterChange = new core_1.EventEmitter();
    }
    ReportFilterCard = __decorate([
        core_1.Component({
            selector: 'report-filter-card',
            inputs: ['cardAmount'],
            outputs: ['onFilterChange'],
            template: "\n        <section class=\"report-filter\">\n            <form [ngFormModel]=\"filterCardForm\">\n                <label for=\"numOfRowsInput\">How many months of the {{cardAmount}} would you like to see?</label>\n                <input\n                    type=\"number\"\n                    id=\"numOfRowsInput\"\n                    min=\"1\"\n                    [ngFormControl]=\"numOfRows\" />\n            </form>\n        </section>\n    "
        }),
        __param(0, core_1.Inject(common_1.FormBuilder))
    ], ReportFilterCard);
    return ReportFilterCard;
})();
exports.ReportFilterCard = ReportFilterCard;
