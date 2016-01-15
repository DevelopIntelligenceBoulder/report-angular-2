var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Report Control allows for the hiding/showing of the form component.
 */
var core_1 = require("angular2/core");
var ReportFormControl = (function () {
    function ReportFormControl() {
        this.isExpanded = false;
        this.onFormVisibilityChanged = new core_1.EventEmitter();
    }
    ReportFormControl.prototype.toggleForm = function () {
        this.isExpanded = !this.isExpanded;
        this.onFormVisibilityChanged.emit(this.isExpanded);
    };
    ReportFormControl = __decorate([
        core_1.Component({
            selector: 'report-form-control',
            outputs: ['onFormVisibilityChanged'],
            template: "\n        <header class=\"report-form-control\">\n            <h3>Want to add another report?</h3>\n            <div class=\"control-button-wrapper\">\n                <button\n                    class=\"primary-button\"\n                    *ngIf=\"!isExpanded\"\n                    (click)=\"toggleForm()\">Add One</button>\n                <button\n                    *ngIf=\"isExpanded\"\n                    (click)=\"toggleForm()\">Hide</button>\n            </div>\n        </header>\n    "
        })
    ], ReportFormControl);
    return ReportFormControl;
})();
exports.ReportFormControl = ReportFormControl;
