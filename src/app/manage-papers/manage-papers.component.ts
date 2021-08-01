import { Component, OnInit } from '@angular/core';
import { app_config } from '../config';
import { PaperService } from '../services/paper.service';

@Component({
  selector: 'app-manage-papers',
  templateUrl: './manage-papers.component.html',
  styleUrls: ['./manage-papers.component.css']

})
export class ManagePapersComponent implements OnInit {
  paperList=[];
  CurrentUser:any
  constructor(private paperService:PaperService) { }

 url=app_config.api_url;
  ngOnInit(): void { 
    this.CurrentUser=JSON.parse(sessionStorage.getItem('user') as string)
   this.fetchPapers();
   document.body.classList.add('manage-paper');

  }
  ngOnDestroy(){
    document.body.classList.remove('manage-paper');

  }

fetchPapers(){
  this.paperService.getPapersByUser(this.CurrentUser._id)
.subscribe((data:any)=>{
  this.paperList=data
  console.log(this.paperList)
})
}


}
