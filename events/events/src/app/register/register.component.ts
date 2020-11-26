import { Component, OnInit } from '@angular/core';
import { User } from '../database-components/user/user';
import { AuthService } from '../services/auth.service';
import { UserDataService } from '../services/user-data.service';
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
  id: number;
  user: User = new User();

  constructor(private authService: AuthService, private userService: UserDataService) { }

  ngOnInit(): void {
  }

  refreshPage(): void {
    window.location.reload();
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data.message);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.createUser(data.message);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  createUser(message: string){
    this.id = + message;
    this.user.idUser = this.id;
    console.log(this.user.idUser );
    this.userService.addUser(this.user, 0).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err.error.message);

      }
    );
  }

}
