import { Component, OnInit } from '@angular/core';

interface expenseArray {
  icon: string,
  name: string
}

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  expenses: expenseArray[] = [
    { icon: 'account_balance_wallet', name: 'Salary'},
    { icon: 'card_giftcard', name: 'Gifts'},
    // { icon: '', name: ''}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
