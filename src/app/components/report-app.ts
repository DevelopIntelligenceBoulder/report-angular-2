/// <reference path="../../../node_modules/angular2/core.d.ts" />
/**
 * Report App is the top-level component for the Report Application.
 **/
import { Component } from "angular2/core";
import { ReportHeader } from "./report-header";
import { ReportFormControl } from "./report-form-control";
import { ReportForm } from "./report-form";
import { ReportList } from "./report-list";
import { Report } from "../objects/report";
import { ReportsService } from "../services/reports-service";

@Component({
    selector: 'report-app',
    directives: [ReportHeader, ReportFormControl, ReportForm, ReportList],
    providers: [ReportsService],
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

    //Making it public allows for use in the addReport() below
    constructor(public reportsService: ReportsService) {
        this.reports = reportsService.reports;
        this.isFormVisible = false;
    }

    toggleVisibility(isVisible: boolean): void {
        this.isFormVisible = isVisible;
    }

    ngOnInit(): void {
        this.reportsService.init()
            .subscribe(()=>{
                this.reports = this.reportsService.getReports();
            });
    }

    addReport(report: any): void {
        this.reportsService.add(report);
    }
}