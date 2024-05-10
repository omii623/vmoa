import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User |null; 
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    console.log('ngOnInit called in menu');
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
    console.log(this.currentPage);
  }

  close(logout?:boolean) {
    if(logout === true){
      this.onLogout.emit(logout)
    }
    this.onCloseSidenav.emit(true);
  }
}
