/**
 * Header component.
 **/
import { Component } from "angular2/core";
import { Report } from "../objects/report.js";

@Component({
    selector: 'report-card',
    inputs: ['report', 'index'],
    template: `
        <li [ngClass]="{odd: isOdd()}">
            <header>
                {{report.date | date:'mediumDate' | uppercase}}
            </header>
            <p>
                Quantity: {{report.quantity}}<br />
                Net Profit: \${{report.netSale | number:'2.2'}}<br />
                Cost of Goods: \${{report.costOfGoods | number:'2.2'}}
            </p>
            <footer>
                <span
                    class="fa"
                    *ngIf="report.isProfitable"
                    [ngClass]="[image]">
                    </span>
                \${{report.grossProfit | number:'2.2'}}
            </footer>
        </li>
    `
})
export class ReportCard {
    report: Report;
    index: number;
    image: string;

    constructor() {
        this.randomizeImage();
    }

    randomizeImage(): void {
        const images: string[] = [
            'fa-angellist',
            'fa-smile-o',
            'fa-thumbs-o-up'
        ];
        const random = Math.round(Math.random()*2);

        this.image = images[random];
    }

    isOdd(): boolean {
        return this.index % 2;
    }
}