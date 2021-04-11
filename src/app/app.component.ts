// Оption 1
// import { Component } from '@angular/core';

// Option 2
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Оption 1
// export class AppComponent {
//   // selectedCar: number = 2;
//   selectedCar: string = 'Nikolai Stanchev';
//    people = [
//         { id: 1, name: 'Philip Michler' },
//         { id: 2, name: 'Petar Ward' },
//         { id: 3, name: 'Rob Davison' },
//         { id: 4, name: 'Rosen Dimov' },
//         { id:5, name: 'Nikolai Stanchev'},
//     ];
// }

// Оption 2
export class AppComponent implements OnInit {
  selectedSimpleItem = 2; // default selected value
  people = [
      { id: 1, name: 'Philip Michler' },
      { id: 2, name: 'Petar Ward' },
      { id: 3, name: 'Rob Davison' },
      { id: 4, name: 'Rosen Dimov' },
      { id:5, name: 'Nikolai Stanchev'},
  ];
    
  ngOnInit() {
    const simpleItems: any = this.people[1];
  }
}