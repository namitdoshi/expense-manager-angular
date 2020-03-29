import { Component, OnInit } from '@angular/core';

interface incomeArray {
  icon: string,
  name: string
}

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  incomes: incomeArray[] = [
    { icon: 'account_balance_wallet', name: 'Salary'},
    { icon: 'card_giftcard', name: 'Gifts'},
    { icon: 'show_chart', name: 'Divends'},
    { icon: 'local_atm', name: 'Rental'},
    { icon: 'replay', name: 'Refund'},
    // { icon: '', name: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
