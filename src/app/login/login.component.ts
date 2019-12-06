import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  showInvalidMsg = false;
  responseMsg = '';
  username = '' ;
  password = '';
  invalidLogin = false;
  FormBuilder: any;
  loginForm: FormGroup;
  authenticationService: any;



  constructor(private formBuilder: FormBuilder, private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
	});
  }

  login(data) {
    // console.log(data)



    this.loginservice.authenticate(this.username, this.password)
    .subscribe((result) => {
      console.log(result);


      this.router.navigate(['/profile']);

      // if(result['status'] === 401){
      //   this.showInvalidMsg=true;
      //   this.responseMsg = result['message'];
      //   console.log('responseMsg');

      //   this.loginForm.reset();
      // }
      // if(result['status'] === 200){
      //     this.router.navigate(['/profile']);
      //   }

    }, err => {
          console.log('Error', err);
          this.showInvalidMsg = true;
          this.responseMsg = 'Invalid username or password';
          this.loginForm.reset();
        });



    }
}

