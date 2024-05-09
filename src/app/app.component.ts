import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'vmoa';
  actualPage = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {

    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage)) {
        this.actualPage = currentPage;
      }
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
      if (this.isLocalStorageAvailable)
        if (user === null) {
          localStorage.setItem('user', JSON.stringify('null'));
        } else {
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
        }

    }, error => {
      console.log(error);
      if (this.isLocalStorageAvailable)
        localStorage.setItem('user', JSON.stringify('null'));

    })
  }

  changePage(selectedPage: string) {
    console.log("page is: " + this.actualPage);
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: any) {
    this.authService.logout().then(() => {
      console.log('Logged out');
    }).catch(error => {
      console.log(error);
    });
  }
}


