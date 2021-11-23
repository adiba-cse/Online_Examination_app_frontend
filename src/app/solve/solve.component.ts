import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import Swal from 'sweetalert2';
import { app_config } from '../config';
import { AnswerService } from '../services/answer.service';
import { PaperService } from '../services/paper.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css'],
})
export class SolveComponent implements OnInit {
  paperData: any;
  url = app_config.api_url;
  solutionForm: any;

  constructor(
    private actroute: ActivatedRoute,
    private paperService: PaperService,
    private fb: FormBuilder,
    private asnwerService: AnswerService,
    private router: Router
  ) {}

  initForm() {
    this.solutionForm = this.fb.group({
      name: '',
      email: '',
      course: '',
      roll_no: '',
    });
  }

  ngOnInit(): void {
    this.initForm();
    let id = this.actroute.snapshot.paramMap.get('paperId');
    this.paperService.getPapersById(id).subscribe((data: any) => {
      console.log(data);
      this.paperData = data;
      document.body.classList.add('solve-paper');
    });
  }
  ngOnDestroy(){
    document.body.classList.remove('solve-paper');

  }

  submitPaper() {
    let solution = this.solutionForm.value;
    solution.data = this.paperData;
    this.asnwerService.addanswer(solution).subscribe((data: any) => {
      console.log(data);
      this.paperService
        .addSolution(this.paperData['_id'], { answers: data['_id'] })
        .subscribe((res) => {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Answer Sheet Submitted.',
          }).then(() => {
            this.router.navigate(['/submitted']);
          });
        });
    });
  }

  setOption(q_i: any, ans:any){
    if(!this.paperData.data.questions[q_i].answer){
      this.paperData.data.questions[q_i].answer = [];
    }
    if (!this.paperData.data.questions[q_i].answer.includes(ans)){
      this.paperData.data.questions[q_i].answer.push(ans);
    }else{
      this.paperData.data.questions[q_i].answer.splice(this.paperData.data.questions[q_i].answer.indexOf(ans), 1);
    }
    console.log(this.paperData.data.questions[q_i].answer);
  }
}
