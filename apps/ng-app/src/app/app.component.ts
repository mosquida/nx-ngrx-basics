import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '@nx-ngrx/users';

@Component({
  selector: 'nx-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-app';

  constructor(private usersFacade: UsersFacade) {}

  ngOnInit() {
    this.usersFacade.init();
    this.usersFacade.allUsers$.subscribe((users) => console.log(users));
    this.usersFacade.loaded$.subscribe((users) => console.log(users));
  }
}
