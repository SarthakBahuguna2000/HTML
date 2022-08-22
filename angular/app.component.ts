import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  company = 'BhavnaCorp';
  isvalid: boolean = true;
  show() {
    alert('Hello function call');
  }
  college = "PSIT Kanpur";
  Branches: string[] = [
    'CSE',
    'ECE',
    'IT'
  ]
  student: any[] = [
    { ID: '101', Name: 'homie', Branch: 'CSE', Gender: 'Male' },
    { ID: '102', Name: 'gomie', Branch: 'CSE', Gender: 'male' },
    { ID: '103', Name: 'domie', Branch: 'CSE', Gender: 'Male' },
    { ID: '104', Name: 'tomie', Branch: 'CSE', Gender: 'male' },
    { ID: '105', Name: 'lomie', Branch: 'ECE', Gender: 'Male' }
  ];

  dropdownvalue = "";
  setdropdownvalue(newvalue: any) {
    this.setdropdownvalue = newvalue.target.value;
  }

  adbuttonstyles() {
    let cssstyles = {
      'color': 'yellow',
      'font-weight': 'bold'
    };
    return cssstyles;
  }

}
