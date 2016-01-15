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
 * Report Form handles the ability to add a report.
 **/
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var ReportForm = (function () {
    function ReportForm(fb) {
        this.repForm = fb.group({
            'reportDate': ['', common_1.Validators.required],
            'quantity': ['', common_1.Validators.required],
            'netSales': ['', common_1.Validators.required],
            'costOfGoods': ['', common_1.Validators.required]
        });
        this.reportDate = this.repForm.controls['reportDate'];
        this.quantity = this.repForm.controls['quantity'];
        this.netSales = this.repForm.controls['netSales'];
        this.costOfGoods = this.repForm.controls['costOfGoods'];
        this.onFormSubmission = new core_1.EventEmitter();
    }
    ReportForm.prototype.onSubmit = function (formValues) {
        //Send event with form
        var report = {
            reportDate: formValues.reportDate,
            quantity: formValues.quantity,
            netSales: formValues.netSales,
            costOfGoods: formValues.costOfGoods
        };
        if (!this.hasErrors()) {
            this.onFormSubmission.emit(report);
        }
        this.clearValues();
    };
    ReportForm.prototype.hasErrors = function () {
        var hasErrors = false;
        if (this.reportDate.errors ||
            this.quantity.errors ||
            this.netSales.errors ||
            this.costOfGoods.errors) {
            hasErrors = true;
        }
        return hasErrors;
    };
    ReportForm.prototype.clearValues = function () {
        this.reportDate.updateValue("");
        this.quantity.updateValue("");
        this.netSales.updateValue("");
        this.costOfGoods.updateValue("");
    };
    ReportForm = __decorate([
        core_1.Component({
            selector: 'report-form',
            outputs: ['onFormSubmission'],
            directives: [common_1.FORM_DIRECTIVES],
            inputs: ['isVisible'],
            template: "\n        <form [ngFormModel]=\"repForm\"\n            (ngSubmit)=\"onSubmit(repForm.value)\"\n            class=\"report-form\"\n            *ngIf=\"isVisible\">\n            <fieldset><legend>Additional Report</legend>\n\n                <label for=\"reportDate\">Report Date:</label>\n                <input\n                    type=\"text\"\n                    id=\"reportDateInput\"\n                    placeholder=\"Report Date (i.e. 10-01-2015)\"\n                    [ngFormControl]=\"reportDate\"/>\n\n                <label for=\"quantity\">Quantity:</label>\n                <input\n                    type=\"text\"\n                    id=\"quantityInput\"\n                    placeholder=\"Quantity of Products Sold\"\n                    [ngFormControl]=\"quantity\"\n                    />\n\n                <label for=\"netSales\">Net Sales:</label>\n                <input\n                    type=\"text\"\n                    id=\"netSalesInput\"\n                    placeholder=\"Net Sales\"\n                    [ngFormControl]=\"netSales\"\n                    />\n\n                <label for=\"costOfGoods\">Cost of Goods:</label>\n                <input\n                    type=\"text\"\n                    id=\"costOfGoodsInput\"\n                    placeholder=\"Cost of Goods\"\n                    [ngFormControl]=\"costOfGoods\"\n                    />\n\n                <input type=\"submit\" value=\"Submit Report\" />\n                <input type=\"button\" value=\"clear\" />\n\n            </fieldset>\n        </form>\n\n    "
        }),
        __param(0, core_1.Inject(common_1.FormBuilder))
    ], ReportForm);
    return ReportForm;
})();
exports.ReportForm = ReportForm;
