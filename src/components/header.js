var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Header component.
 **/
var core_1 = require("angular2/core");
var ReportHeader = (function () {
    function ReportHeader() {
        this.date = new Date();
    }
    ReportHeader = __decorate([
        core_1.Component({
            selector: 'report-header',
            template: "\n        <header class=\"title\">\n            <h1>Angular Reporting <span class=\"sub-title\">Ohh yeah it can be fun!</span>\n\t\t\t</h1>\n            <time [attr.datetime]=\"(date | date:'longDate')\">{{date | date:'longDate'}}</time>\n        </header>\n    "
        })
    ], ReportHeader);
    return ReportHeader;
})();
exports.ReportHeader = ReportHeader;
