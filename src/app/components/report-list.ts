/// <reference path="../../../node_modules/angular2/core.d.ts" />
/**
 * Report List handles the report listing.
 **/
import {
    Component,
    EventEmitter
} from "angular2/core";
import { ReportCard } from "./report-card";
import { ReportFilterCard } from "./report-filter-card";
import { Report } from "../objects/report";

@Component({
    selector: 'report-list',
    directives: [ReportCard, ReportFilterCard],
    inputs: ['reportList', 'cardAmount'],
    template: `
        <section>
            <report-filter-card
                [cardAmount]="cardAmount"
                (onFilterChange)="changeIt($event)"
                ></report-filter-card>
            <ul class="report-listing">
                <report-card
                    *ngFor="#report of reportFiltered(); #i=index"
                    [report]="report"
                    [index]="i"
                    class="report">
                </report-card>
            </ul>
        </section>
    `
})
export class ReportList {
    reportList: Report[];
    filteredList: Report[];

    constructor() {
        this.filteredList = [];
    }

    reportFiltered(): Report[] {
        return this.filteredList;
    }

    changeIt(cardsShown: number): void {
        this.filteredList = this.reportList.slice(0, cardsShown);
    }

    //Component lifecycle
    //  Invoked after component content has been initialized
    ngAfterContentInit() {
        this.filteredList = this.reportList;
    }

}