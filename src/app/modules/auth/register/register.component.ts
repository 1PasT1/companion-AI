import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    createFirst: boolean = true;
    createSecond: boolean = false
    progressFirst: boolean = false;
    progressSecond: boolean = false;
    progressThird: boolean = false;
    progressFourth: boolean = false;
    progressFifth: boolean = false;

    styleBarFirst: boolean = false;
    styleBarSecond: boolean = false;
    styleBarThird: boolean = false;

    isDropdownOpen = false;
    selectedOption: string | null = null;
    dropdownStyle: any = {};
    createAcc() {
        this.createFirst = false;
        this.createSecond = true;
    }


    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;


        if (this.isDropdownOpen) {
            this.dropdownStyle = { 'border-radius': '8px 8px 0px 0px', /* Add other styles for open state */ };
        } else {
            this.dropdownStyle = { 'border-radius': '8px', /* Add other styles for closed state */ };
        }
    }

    selectOption(option: string) {
        this.selectedOption = option;
        this.isDropdownOpen = true;

    }

    progressA(number: number) {
        if (number === 1) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = true;
            this.progressSecond = false;
            this.progressThird = false;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = false;
            this.styleBarThird = false;
        } else if (number === 2) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = true;
            this.progressThird = false;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = true;
            this.styleBarThird = false;
        } else if (number === 3) {
            this.createFirst = false;
            this.createSecond = false;
            this.progressFirst = false;
            this.progressSecond = false;
            this.progressThird = true;
            // for style
            this.styleBarFirst = true;
            this.styleBarSecond = true;
            this.styleBarThird = true;
        }
    }
}
