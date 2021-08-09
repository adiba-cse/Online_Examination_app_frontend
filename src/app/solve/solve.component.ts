import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { app_config } from '../config';
import { AnswerService } from '../services/answer.service';
import { PaperService } from '../services/paper.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {
paperData:any
url=app_config.api_url;
solutionForm: any;

  constructor(private actroute:ActivatedRoute,private paperService:PaperService, private fb: FormBuilder, private asnwerService: AnswerService
    ) { }


  initForm(){
    this.solutionForm = this.fb.group({
      name : '',
      email : '',
      course: '',
      roll_no: '',
    })
  }

  ngOnInit(): void {
    this.initForm();
    let id=this.actroute.snapshot.paramMap.get("paperId")
this.paperService.getPapersById(id).subscribe((data:any)=>{
  console.log(data);
  this.paperData=data
})

  }

  submitPaper(){
    let solution = this.solutionForm.value;
    solution.data = this.paperData;
    this.asnwerService.addanswer(solution).subscribe((data : any) => {
      console.log(data);
      this.paperService.addSolution(this.paperData['_id'], { answers : data['_id']}).subscribe(res => {
        console.log(res);
      })
    });
  }

}
