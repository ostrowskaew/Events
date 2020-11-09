import { Component, OnInit } from '@angular/core';
import { User } from '../database-components/user/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  refreshPage(): void {
    window.location.reload();
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
/*
  addUser(email : String, password: String): void {
    email = email.trim();
    password = password.trim();
    if (!email || !password ) { return; }
    this.userService.addUser({ email, password} as User)
    .subscribe( user => {
    this.users.push(user);
    });
}
*/


}
