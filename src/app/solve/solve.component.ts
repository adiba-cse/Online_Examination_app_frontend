import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { app_config } from '../config';
import { PaperService } from '../services/paper.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {
paperData:any
url=app_config.api_url
  constructor(private actroute:ActivatedRoute,private PaperService:PaperService
    ) { }

  ngOnInit(): void {
    let id=this.actroute.snapshot.paramMap.get("paperId")
this.PaperService.getPapersById(id).subscribe((data:any)=>{
  console.log(data);
  this.paperData=data
})

  }

}
