import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpaperComponent } from './addpaper/addpaper.component';
import { LoginComponent } from './login/login.component';
import { ManagePapersComponent } from './manage-papers/manage-papers.component';
import { RegisterComponent } from './register/register.component';
import { SolveComponent } from './solve/solve.component';
const routes: Routes = [
  { path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'managepaper',component:ManagePapersComponent},
  {path:'addpaper',component:AddpaperComponent},
  {path:'solve/:paperId',component:SolveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
