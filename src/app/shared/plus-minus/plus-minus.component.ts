// a nested component
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plus-minus',
    templateUrl: './plus-minus.component.html',
    styleUrls: ['./plus-minus.component.css']
})
export class PlusMinusComponent implements OnInit, OnChanges {
    @Input()
    inputNum: number;

    @Output()
    outputNum: EventEmitter<number> = new EventEmitter<number>();

    num: number;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(): void {
        console.log("input changed: " + this.inputNum);
        this.num = this.inputNum;
    }

    plus(): void {
        this.num++;
        this.outputNum.emit(this.num);
    }

    minus(): void {
        this.num--;
        this.outputNum.emit(this.num);
    }

}
