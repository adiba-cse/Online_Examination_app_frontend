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
  

  registerForm: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    console.log('Component loaded');
  }

  ngOnInit(): void {
   
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
    document.body.classList.add('register-paper');
  }
  ngOnDestroy(){
    document.body.classList.remove('register-paper');

  }
}

