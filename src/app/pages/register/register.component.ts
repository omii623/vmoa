import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/Users';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  singUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    }),
    phone: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  onSubmit() {
    console.log(this.singUpForm.value);
    this.authService.register(this.singUpForm.get('email')?.value!,this.singUpForm.get('password')?.value!).then(cred =>{
      console.log(cred);
      const user:User = {
        id: cred.user?.uid!,
        email: this.singUpForm.get('email')?.value!,
        name: {
          firstname: this.singUpForm.get('name.firstName')?.value!,
          lastname: this.singUpForm.get('name.lastName')?.value!
        },
        phone: this.singUpForm.get('phone')?.value!
      };
      this.userService.create(user).then(_ => {
        console.log('User added');
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.log(error);
      });
    }).catch(error=>{
      console.log(error);
    })
  }

}
