System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ReportFormControl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReportFormControl = (function () {
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
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReportFormControl);
                return ReportFormControl;
            })();
            exports_1("ReportFormControl", ReportFormControl);
        }
    }
});
//# sourceMappingURL=report-form-control.js.map