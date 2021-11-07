import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../login.css'],
  encapsulation: ViewEncapsulation.None
})

  export class LoginComponent implements OnInit {
  loginform : any;
    constructor(private fb:FormBuilder , private userservice:UserService, private router: Router) { }
  
    ngOnInit(): void {
      this.initForm();
      document.body.classList.add('login-paper');
    }
    ngOnDestroy(){
      document.body.classList.remove('login-paper');
  
    }
  initForm()
  {this.loginform = this.fb.group({
  email : '',
  password: '',
  });
  }
  submitForm(){
    console.log(this.loginform.value);
  
    let formdata = this.loginform.value;
    this.userservice.getUserByEmail(formdata.email)
    .subscribe(  (data : any) => {
      console.log(data);
  
      if(data ){
  
      if(data.password ==formdata.password){
        console.log('login successfull');
      sessionStorage.setItem( 'user', JSON.stringify(data));

this.userservice.currentUser=data;
      Swal.fire({
        icon : 'success',
        title: 'Hurray',
        text: 'Logged in Successfully'
      })
  //{path:'managepaper',component:ManagePapersComponent},
  this.router.navigate(['/managepaper']);
      
    }else{
        console.log('password incorrect');
        Swal.fire({
          icon : 'error',
          title: 'Oops!!',
          text: 'Login failed'
        })
      }
  
      }else{
        console.log('email not found');
        Swal.fire({
          icon : 'error',
          title: 'Hurray',
          text: 'Login failed'
        })
      }
    })
  }
  }
