import { Component, NgModule, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { StoresTypeService } from '../services/stores/stores-data.service';
import { StoresService } from '../services/stores/stores.service';
import { Http } from '@angular/http';
import { UserService } from '../services/auth/index';
import { User } from '../models/index';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({ backgroundColor: 'transparent', color: '#F4F2F4', opacity: 1 }),
            animate('800ms')
          ]
        ),
        transition(
          ':leave', [
            style({ opacity: 0 }),
            animate('800ms')
          ]
        )
      ]
    )
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [StoresTypeService]
})


export class WelcomeComponent {
  public currentUser: User;
  public message: string = '';
  private stores;
  private data;



  constructor(private storesTypeService: StoresTypeService, private storesService: StoresService,
    private userService: UserService) {

    this.stores = storesTypeService.getStores();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  private getUserInfo() {
    this.userService.getUserInfo().subscribe(message => { this.message = message; });
  }

  private getStores() {
    this.storesService.getStores().subscribe(data => { this.data = data; });
  }

  ngOnInit() {
    this.getUserInfo();
    this.getStores();
  }

}
