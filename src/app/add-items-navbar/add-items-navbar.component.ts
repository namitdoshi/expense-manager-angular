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

  constructor() { }

  ngOnInit(): void {
  }

}
