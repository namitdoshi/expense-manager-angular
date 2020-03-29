import { Component, OnInit } from '@angular/core';

  interface expenseArray { 
    icon: string,
    name: string 
  }

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  expenses: expenseArray[] = [
    { icon: 'local_dining', name: 'Food' },
    { icon: 'directions_bus', name: 'Transportation' },
    { icon: 'home', name: 'Home' },
    { icon: 'offline_bolt', name: 'Electricity' },
    { icon: 'drive_eta', name: 'Car' },
    { icon: 'videogame_asset', name: 'Entertainment' },
    { icon: 'shopping_cart', name: 'Shopping' },
    { icon: '', name: '' },
    { icon: '', name: '' },
    { icon: '', name: '' },
    // { icon: '', name: '' },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
