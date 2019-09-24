import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changePasswordForm: FormGroup;
  fb: any;


  constructor(fb: FormBuilder) {
      }

  ngOnInit() {

  //   this.changePasswordForm = this.fb.group({
  //     // old_password: [null, Validators.required],
  //     new_password: [null, Validators.required],
  //     confirm_new_password: [null, [Validators.required, this.passwordMatch]]
  // });
}

passwordMatch(control: AbstractControl){
  const paswd = control.root.get('new_password');
  if (paswd && control.value !== paswd.value) {
   return {
       passwordMatch: false
   };
  }
  return null;
}


changePassword(value){
  if (this.changePasswordForm.valid) {
      console.log('Change password form valid');

  }
}
}
