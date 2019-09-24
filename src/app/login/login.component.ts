import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '' ;
  password = '';
  invalidLogin = false;
  FormBuilder: any;
  loginForm: any;
  authenticationService: any;



  constructor(private formBuilder: FormBuilder, private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
    // this.authenticationService.post().subscribe(data => {
    //   this.login = data;
    // });
    this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
  }

  login(data) {

   if (this.loginservice.authenticate(this.username, this.password)) {
      console.log("ererer");
      this.router.navigate(['/profile']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
  }
}
}