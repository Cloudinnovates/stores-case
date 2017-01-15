import { Component, OnInit } from '@angular/core';

  /** 
    * @name: NavConfig
    * @description: Interface class is written here 
    **/

interface NavConfig  {

   home: string;
   whoWeAre: string;
   showCase: string;
   stores: string;
   contact: string;

}

/**
  * @name: nav
  * @param: home, whoWeAre, showCase, stores, contact 
  * @description: Creating a new element from Header Class 
  **/

const nav: NavConfig = {
  home: 'Home',
  whoWeAre: 'Who We Are',
  showCase: 'Show Case',
  stores: 'Stores',
  contact: 'Contact'
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  links = [
    { menu: nav.home, alt: 'Home', id: 'link-1' },
    { menu: nav.whoWeAre, alt: 'Who We Are', id: 'link-2' },
    { menu: nav.showCase, alt: 'Show Case', id: 'link-3' },
    { menu: nav.stores, alt: 'Stores', id: 'link-4' },
    { menu: nav.contact, alt: 'Contact', id: 'link-5' }
  ];

  ngOnInit() {

  }

}
