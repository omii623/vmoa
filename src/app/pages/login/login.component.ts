import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');
  loading: boolean = false;
  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) { }


  login() {
    this.loading = true;
    this.authService.login(this.email.value!,this.password.value!).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/main');
      this.loading = false;
    }).catch(error => {
      console.log(error);
      this.loading = false;
    });

    /*this.loading = true;
    this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value as string, this.password.value as string)
    this.loadingSubscription = this.loadingObservation
      .subscribe(
        {
          next: (data: boolean) => {
            this.router.navigateByUrl('/main');
          }, error: (error) => {
            console.error(error);
            this.loading = false;
          }, complete: () => {
            console.log('finally');
            this.loading = false;
          }
        }
      );*/
  }
}
