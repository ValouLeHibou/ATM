import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../../services/money.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttonList: any = [
    {label: '1 Centime', value: 0.01},
    {label: '2 Centimes', value: 0.02},
    {label: '5 Centimes', value: 0.05},
    {label: '10 Centimes', value: 0.10},
    {label: '20 Centimes', value: 0.20},
    {label: '50 Centimes', value: 0.50},
    {label: '1 Euro', value: 1},
    {label: '2 Euros', value: 2},
    {label: '5 Euros', value: 5},
    {label: '10 Euros', value: 10},
  ]

  itemList: any = [
    {
      id: 1,
      name: 'iPhoneXS',
      priceLabel: '25,20€',
      priceValue: 25.20,
    },
    {
      id: 2,
      name: 'iMac 2018',
      priceLabel: '36,52€',
      priceValue: 36.52,
    },
    {
      id: 3,
      name: 'Casque Beats',
      priceLabel: '12,96€',
      priceValue: 12.96,
    },
    {
      id: 4,
      name: 'iPad 10',
      priceLabel: '2,10€',
      priceValue: 2.10,
    },
    {
      id: 5,
      name: 'Apple TV',
      priceLabel: '8,45€',
      priceValue: 8.45,
    },
    {
      id: 6,
      name: 'Mac Mini',
      priceLabel: '18,15€',
      priceValue: 18.15,
    },
    {
      id: 7,
      name: 'iPod',
      priceLabel: '0,50€',
      priceValue: 0.5,
    },
    {
      id: 8,
      name: 'Apple Watch',
      priceLabel: '15,30€',
      priceValue: 15.30,
    },
  ]

  constructor(
    private moneyService: MoneyService
  ) {
  }

  ngOnInit() {
  }

  getMoney() {
    return this.moneyService.get();
  }

  addMoney(amount) {
    return this.moneyService.add(amount);
  }

  emptyWallet() {
    return this.moneyService.empty();
  }

  verifyMoney(amount) {
    return this.moneyService.verify(amount);
  }
}
