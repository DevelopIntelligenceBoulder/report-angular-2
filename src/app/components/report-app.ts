/// <reference path="../../../node_modules/angular2/core.d.ts" />
/**
 * Report App is the top-level component for the Report Application.
 **/
import { Component } from "angular2/core";
import { ReportHeader } from "./header";
import { ReportFormControl } from "./report-form-control";
import { ReportForm } from "./report-form";
import { ReportList } from "./report-list";
import { Report } from "../objects/report";

@Component({
    selector: 'report-app',
    directives: [ReportHeader, ReportFormControl, ReportForm, ReportList],
    template: `
        <report-header></report-header>
        <div class="grid" id="content">
            <h2>Report Information</h2>
            <p>There are {{reports.length}} months of retrievable data.</p>
            <report-form-control
                (onFormVisibilityChanged)="toggleVisibility($event)"></report-form-control>
            <report-form
                [isVisible]="isFormVisible"
                (onFormSubmission)="addReport($event)"></report-form>
            <report-list
                [reportList]="reports"
                [cardAmount]="reports.length">
            </report-list>
        </div>
    `
})
export class ReportApp {
    reports: Report[];
    isFormVisible: boolean;

    constructor() {
        this.reports = [
            new Report('1', '1-1-2012', '500', '750', '400'),
            new Report('2', '2-1-2012', '425', '650', '300'),
            new Report('3', '3-1-2012', '300', '450', '300'),
            new Report('4', '4-1-2012', '600', '750', '400')
        ];
        this.isFormVisible = false;
    }

    toggleVisibility(isVisible: boolean) {
        this.isFormVisible = isVisible;
    }

    addReport(report: any): void {
        //Make it a string based id
        const id = this.reports.length + 1 + '';
        const newReport = new Report(
            id,
            report.reportDate,
            report.quantity,
            report.netSales,
            report.costOfGoods
        )
        this.reports.push(newReport);
    }
}