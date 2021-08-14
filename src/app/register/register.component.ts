import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //side_title:any="My website";

  registerForm: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    console.log('Component loaded');
  }

  ngOnInit(): void {
    // console.log(this.side_title);
    this.initForm();
  }

  registerSubmit() {
    console.log(this.registerForm.value);
    this.userService.addUser(this.registerForm.value).subscribe((res: any) => {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Registered Successfully',
      }).then(() => {
        this.router.navigate(['/login']);
      });
    });
  }

  initForm() {
    this.registerForm = this.fb.group({
      fullname: '',
      email: '',
      password: '',
    });
  }
}
