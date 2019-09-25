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
    console.log(data)
    // this.router.navigate(['/profile']);


    this.loginservice.authenticate(this.username, this.password)
    .subscribe((result) => {
      if(result['status'] == 'OK'){
          this.router.navigate(['/profile']);
        }
    }, err => {
          console.log('Error', err);
        });

    // console.log("dsfsdfsd");
    // console.log(res);
    // if(res['status'] == 200){
    //   this.router.navigate(['/profile']);
    // }






    }
}

