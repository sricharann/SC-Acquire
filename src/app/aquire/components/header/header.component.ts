import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Create Target', icon: 'pi pi-plus-circle', command: () => this.navigateNext('targetdetails') },
      { label: 'All', icon: 'pi pi-sign-in', command: () => this.navigateNext('active') },
      { label: 'Pending Approval', icon: 'pi pi-minus-circle', command: () => this.navigateNext('pendingapproval') },
      { label: 'Approved', icon: 'pi pi-check-circle', command: () => this.navigateNext('approved') },
      { label: 'Rejected', icon: 'pi pi-times-circle', command: () => this.navigateNext('rejected') }
    ];
    this.activeItem = this.items[1];
  }

  navigateNext(val) {
    this.router.navigate([val]);
  }
}
