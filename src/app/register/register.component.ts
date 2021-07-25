import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 //side_title:any="My website";

  
registerForm:any;


constructor(private fb :FormBuilder,private userService:UserService)
{
    console.log("Component loaded");
   }

  ngOnInit(): void {
    // console.log(this.side_title);
this.initForm();
  }

registerSubmit()
{console.log(this.registerForm.value);
  this.userService.addUser(this.registerForm.value).subscribe((res:any)=>{console.log(res)});
}

  initForm(){
this.registerForm=this.fb.group({
  fullname:'',
  email:'',
  password:'',

});
  }


}