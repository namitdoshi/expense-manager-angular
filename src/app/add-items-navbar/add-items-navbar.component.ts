import { Component, OnInit } from '@angular/core';

interface Selector {
  value: string;
}

@Component({
  selector: 'app-add-items-navbar',
  templateUrl: './add-items-navbar.component.html',
  styleUrls: ['./add-items-navbar.component.scss']
})
export class AddItemsNavbarComponent implements OnInit {

  select: Selector[] = [
    {value: 'Expenses'},
    {value: 'Income'}
  ]
  screenToggler: boolean = true;
  selected = 'Income';
  constructor() { }

  ngOnInit(): void {
  }

  onSelectChange() {
    this.screenToggler = (!this.screenToggler)
    // console.log(this.screenToggler)
  }
}
